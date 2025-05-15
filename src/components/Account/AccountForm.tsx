import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOrUpdateAccount } from 'store/slices/accountSlice';
import { Account } from 'models';
import { createOrUpdateAccount } from 'services/api/accountService';

const initialForm = {
  account_id: 0,
  baseline_balance: 0,
};

const AccountForm: React.FC = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        name === 'account_id' || name === 'baseline_balance'
          ? Number(value)
          : value,
    }));
  };

  const validate = () => {
    if (!form.account_id) return 'Account ID is required';
    if (!form.baseline_balance) return 'Baseline balance is required';
    if (form.baseline_balance < 0)
      return 'Baseline balance must be a positive number';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);
    setError('');
    const account: Account = {
      account_id: form.account_id,
      baseline_balance: form.baseline_balance,
      activity_window: [],
    };
    try {
      const addOrUpdate = await createOrUpdateAccount(account);
      dispatch(addOrUpdateAccount(addOrUpdate));
      setForm(initialForm);
    } catch (err) {
      setError('Failed to add or update account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <input
        type="number"
        name="account_id"
        placeholder="Account ID"
        value={form.account_id}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="baseline_balance"
        placeholder="Baseline Balance"
        value={form.baseline_balance}
        onChange={handleChange}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Adding or updating...' : 'Add or Update Account'}
      </button>
    </form>
  );
};

export default AccountForm;

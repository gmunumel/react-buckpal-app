import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from 'store/slices/userSlice';
import { User } from 'models';
import { createUser } from 'services/api/userService';

const initialForm = {
  user_id: 0,
  name: '',
  street_name: '',
  street_number: 0,
  city: '',
  postal_code: '',
  country: '',
};

const UserForm: React.FC = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        name === 'user_id' || name === 'street_number' ? Number(value) : value,
    }));
  };

  const validate = () => {
    if (!form.user_id) return 'User ID is required';
    if (!form.name) return 'Name is required';
    if (!form.street_name) return 'Street name is required';
    if (!form.street_number) return 'Street number is required';
    if (!form.city) return 'City is required';
    if (!form.postal_code) return 'Postal code is required';
    if (!form.country) return 'Country is required';
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
    const newUser: User = {
      user_id: form.user_id,
      name: form.name,
      address: {
        street_name: form.street_name,
        street_number: form.street_number,
        city: form.city,
        postal_code: form.postal_code,
        country: form.country,
      },
      status: 'enable',
    };
    try {
      const created = await createUser(newUser);
      dispatch(addUser(created));
      setForm(initialForm);
    } catch (err) {
      setError('Failed to create user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <input
        type="number"
        name="user_id"
        placeholder="User ID"
        value={form.user_id}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="street_name"
        placeholder="Street name"
        value={form.street_name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="street_number"
        placeholder="Street number"
        value={form.street_number}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="postal_code"
        placeholder="Postal code"
        value={form.postal_code}
        onChange={handleChange}
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={form.country}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add User'}
      </button>
    </form>
  );
};

export default UserForm;

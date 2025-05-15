import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import { setAccounts } from 'store/slices/accountSlice';
import { AccountList, AccountForm } from 'components/Account';
import { fetchAccounts } from 'services/api/accountService';

const AccountPage: React.FC = () => {
  const accounts = useSelector((state: RootState) => state.accounts.accounts);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAccounts()
      .then((data) => dispatch(setAccounts(data)))
      .catch((error) => {
        console.error('Failed to fetch accounts:', error);
      });
  }, [dispatch]);

  return (
    <div>
      <Link to="/">Back</Link>
      <h1>Account Page</h1>
      <AccountForm />
      <AccountList accounts={accounts} />
    </div>
  );
};

export default AccountPage;

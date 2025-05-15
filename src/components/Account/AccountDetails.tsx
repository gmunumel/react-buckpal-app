import React from 'react';
import { Account } from 'models';

interface AccountDetailsProps {
  account: Account;
}

const AccountDetails: React.FC<AccountDetailsProps> = ({ account }) => {
  return (
    <div>
      <h2>Account Details</h2>
      <p>Account ID: {account.account_id}</p>
      <p>Balance: {account.baseline_balance}</p>
      <h3>Activity Window</h3>
      <ul>
        {account.activity_window.map((activity) => (
          <li key={activity.activity_id}>
            Activity ID: {activity.activity_id}, Amount: {activity.money}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountDetails;

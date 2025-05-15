import React from 'react';
import { Account } from 'models';

interface AccountListProps {
  accounts: Account[];
}

const AccountList: React.FC<AccountListProps> = ({ accounts }) => {
  return (
    <div>
      <h2>Accounts</h2>
      <ul>
        {accounts.map((account) => (
          <li key={account.account_id}>
            Account ID: {account.account_id}, Balance:{' '}
            {account.baseline_balance}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;

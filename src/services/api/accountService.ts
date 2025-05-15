import { Account } from 'models';
import httpClient from 'services/httpClient';

export const fetchAccounts = async (): Promise<Account[]> => {
  const response = await httpClient.get<Account[]>('/accounts');
  return response.data;
};

export const createOrUpdateAccount = async (
  account: Account,
): Promise<Account> => {
  const response = await httpClient.put<Account>(
    `/accounts/${account.account_id}`,
    account,
  );
  return response.data;
};

import { User } from 'models';
import httpClient from 'services/httpClient';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await httpClient.get<User[]>('/users');
  return response.data;
};

export const createUser = async (user: User): Promise<User> => {
  const response = await httpClient.post<User>('/users', user);
  return response.data;
};

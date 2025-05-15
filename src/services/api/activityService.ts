import { Activity } from 'models';
import httpClient from 'services/httpClient';

export const fetchActivities = async (): Promise<Activity[]> => {
  const response = await httpClient.get<Activity[]>('/activities');
  return response.data;
};

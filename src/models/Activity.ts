export interface Activity {
  activity_id: number;
  owner_account_id: number;
  source_account_id: number;
  target_account_id: number;
  timestamp: string;
  money: number;
}

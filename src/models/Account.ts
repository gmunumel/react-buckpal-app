export interface ActivityRecord {
  activity_id: number;
  owner_account_id: number;
  source_account_id: number;
  target_account_id: number;
  timestamp: string;
  money: number;
}

export interface Account {
  account_id: number;
  baseline_balance: number;
  activity_window: ActivityRecord[];
}

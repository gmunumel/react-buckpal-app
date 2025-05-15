import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Account } from 'models';

interface AccountState {
  accounts: Account[];
}

const initialState: AccountState = {
  accounts: [],
};

const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setAccounts(state, action: PayloadAction<Account[]>) {
      state.accounts = action.payload;
    },
    addOrUpdateAccount(state, action: PayloadAction<Account>) {
      state.accounts.unshift(action.payload);
    },
  },
});

export const { setAccounts, addOrUpdateAccount } = accountSlice.actions;
export default accountSlice.reducer;

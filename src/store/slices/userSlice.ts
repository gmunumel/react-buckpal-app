import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models';

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    addUser(state, action: PayloadAction<User>) {
      state.users.unshift(action.payload);
    },
  },
});

export const { setUsers, addUser } = userSlice.actions;
export default userSlice.reducer;

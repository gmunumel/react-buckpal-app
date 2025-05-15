import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Activity } from 'models';

interface ActivityState {
  activities: Activity[];
}

const initialState: ActivityState = {
  activities: [],
};

const activitySlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    setActivities(state, action: PayloadAction<Activity[]>) {
      state.activities = action.payload;
    },
  },
});

export const { setActivities } = activitySlice.actions;
export default activitySlice.reducer;

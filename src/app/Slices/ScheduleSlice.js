import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schedule:
    "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
};

const ScheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setSchedule: (state, action) => {
      console.log('action schedule is ',action.payload.schedule);
      state.schedule = action.payload.schedule;
      console.log('after setting state is',state.schedule);
    },
  },
});

export default ScheduleSlice.reducer;
export const { setSchedule } = ScheduleSlice.actions;

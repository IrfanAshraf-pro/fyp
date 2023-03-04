import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";
import drawerReducer from "./Slices/drawerSlice";
import ScheduleSlice from "./Slices/ScheduleSlice";

export default configureStore({
  reducer: {
    drawer: drawerReducer,
    auth: AuthSlice,
    schedule: ScheduleSlice,
  },
});

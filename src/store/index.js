import { configureStore } from "@reduxjs/toolkit";
import listPhoneNumberReducer from "./slices/counterSlice";
import studentReducer from "./slices/studentSlice";

export const store = configureStore({
  reducer: {
    listPhone: listPhoneNumberReducer,
    listStudent: studentReducer,
  },
});

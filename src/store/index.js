import { configureStore } from "@reduxjs/toolkit";
import listPhoneNumberReducer from "./slices/counterSlice";
import studentReducer from "./slices/studentSlice";
import todoReducer from "./slices/todoSlice";

export const store = configureStore({
  reducer: {
    listPhone: listPhoneNumberReducer,
    listStudent: studentReducer,
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

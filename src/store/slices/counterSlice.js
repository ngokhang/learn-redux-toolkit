import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      username: "Test user",
      phonenumber: "0123456789",
    },
  ],
  favoriteList: [],
};

export const listPhoneNumberReducer = createSlice({
  name: "listNormal",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    addToFavoriteList: (state, action) => {
      state.favoriteList.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, deleteUser, addToFavoriteList } =
  listPhoneNumberReducer.actions;

export default listPhoneNumberReducer.reducer;

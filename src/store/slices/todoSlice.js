import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createNewTodoAPI,
  deleteTodoAPI,
  getTodoListAPI,
  updateTodoAPI,
} from "../../services/api";

const initialState = {
  todoList: [],
};

export const getTodoList = createAsyncThunk(
  "todos/getTodoList",
  async (_, thunkAPI) => {
    const _response = await getTodoListAPI();
    return _response.data;
  }
);

export const createNewTodo = createAsyncThunk(
  "todos/createNewTodo",
  async ({ id, title }, thunkAPI) => {
    const _response = await createNewTodoAPI({ id: id + 1, title });
    thunkAPI.dispatch(getTodoList());
    return _response.data;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, title }, thunkAPI) => {
    const _response = await updateTodoAPI({ id, title });
    thunkAPI.dispatch(getTodoList());
    return _response.data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, thunkAPI) => {
    const _response = await deleteTodoAPI(id);
    thunkAPI.dispatch(getTodoList());
    return _response.data;
  }
);

const todoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [getTodoList.fulfilled]: (state, action) => {
      state.todoList = action.payload;
    },
  },
});

export default todoReducer.reducer;

import axios from "axios";

export const getTodoListAPI = async () => {
  return await axios.get("http://localhost:4000/todos");
};

export const createNewTodoAPI = async ({ id, title }) => {
  return await axios.post(`http://localhost:4000/todos`, {
    id,
    title,
    status: false,
  });
};

export const updateTodoAPI = async ({ id, title }) => {
  return await axios.put(`http://localhost:4000/todos/${id}`, {
    title,
  });
};

export const deleteTodoAPI = async (id) => {
  return await axios.delete(`http://localhost:4000/todos/${id}`);
};

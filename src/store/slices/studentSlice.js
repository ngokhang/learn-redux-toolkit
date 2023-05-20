import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    {
      name: "Nguyen Van Test",
      subjects: ["Toan", "Ly"],
    },
  ],
};

const studentReducer = createSlice({
  name: "manageStudent",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      const newStudent = { name: action.payload, subjects: [] };
      state.students.push(newStudent);
    },
    deleteStudent: (state, action) => {
      state.students.splice(action.payload, 1);
    },
    deleteSubject: (state, action) => {
      const { index, indexStudent } = action.payload;
      state.students[indexStudent].subjects.splice(index, 1);
    },
    addSubject: (state, action) => {
      const { indexStudent, subjectName } = action.payload;
      if (!state.students[indexStudent]) {
        alert("Not student has id is " + indexStudent);
      } else {
        state.students[indexStudent].subjects.push(subjectName);
      }
    },
  },
});

export const { addStudent, deleteStudent, deleteSubject, addSubject } =
  studentReducer.actions;

export default studentReducer.reducer;

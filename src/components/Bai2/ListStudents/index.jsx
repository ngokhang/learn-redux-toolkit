import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent, deleteSubject } from '../../../store/slices/studentSlice';

const ListStudents = () => {
  const listStudent = useSelector(state => state.listStudent.students);
  const dispatch = useDispatch();
  return (
    <ul>
      {
        listStudent.map((item, indexStudent) => (
          <li>
            <b>{item.name} - Id: {indexStudent + 1} - <button onClick={() => dispatch(deleteStudent(indexStudent))}>Delete this student</button></b>
            <ul>
              {
                item.subjects.map((item, index) => (
                  <li>
                    <b>{item}</b>
                    <button onClick={() => dispatch(deleteSubject({ index, indexStudent }))}>Delete this subject</button>
                  </li>
                ))
              }
            </ul>
          </li>
        ))
      }
    </ul>
  );
};

export default ListStudents;
import React, { useState } from 'react';
import { addSubject } from '../../../store/slices/studentSlice';
import { useDispatch } from 'react-redux';

const FormAddSubject = () => {
  const dispatch = useDispatch();
  const [indexStudent, setIndexStudent] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const handleOnClickAdd = () => {
    dispatch(addSubject({ indexStudent: indexStudent - 1, subjectName }));
    setIndexStudent('');
    setSubjectName('');
  }
  return (
    <div>
      <h1>Add subject</h1>
      <div>
        <label htmlFor="studentId">Student Id</label>
        <input type="text" id='studentId' onChange={(e) => setIndexStudent(e.target.value)} value={indexStudent} />
      </div>
      <div>
        <label htmlFor="subjectName">Subject</label>
        <input type="text" id='subjectName' onChange={(e) => setSubjectName(e.target.value)} value={subjectName} />
        <button onClick={() => handleOnClickAdd()}>Add subject</button>
      </div>
    </div>
  );
};

export default FormAddSubject;
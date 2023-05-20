import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../../store/slices/studentSlice';

const FormAddStudent = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const reset = () => {
    setName('');
  }
  const handleOnClickAdd = () => {
    dispatch(addStudent(name));
    reset();
  }
  return (
    <div>
      <h1>Add student</h1>
      <div>
        <label htmlFor="studentName">Name</label>
        <input type="text" id='studentName' onChange={e => setName(e.target.value)} value={name} />
        <button onClick={() => handleOnClickAdd()}>Add</button>
      </div>
    </div>
  );
};

export default FormAddStudent;
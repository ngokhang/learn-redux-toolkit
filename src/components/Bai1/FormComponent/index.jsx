import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../store/slices/counterSlice';

const FormComponent = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const reset = () => {
    setPhoneNumber('');
    setUsername('');
  }
  const handleClickCreate = () => {
    const newUser = { username, phonenumber: phoneNumber }
    dispatch(addUser(newUser));
    reset();
  }
  return (
    <div className='form-data'>
      <h2>Create new user</h2>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id='username' onChange={e => setUsername(e.target.value)} value={username} required />
      </div>
      <div>
        <label htmlFor="phonenumber">Phone number</label>
        <input type="text" id='phonenumber' onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} required />
      </div>
      <div>
        <button onClick={() => handleClickCreate()} disabled={username.length === 0 || phoneNumber.length < 1}>Create</button>
      </div>
    </div>
  );
};

export default FormComponent;
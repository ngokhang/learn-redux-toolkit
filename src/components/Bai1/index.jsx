import React from 'react';
import FormComponent from './FormComponent';
import { NavLink, Outlet } from 'react-router-dom';

const Bai1 = () => {
  return (
    <div className='bai1'>
      <FormComponent />

      <nav>
        <NavLink to="normal">Normal List</NavLink>
        <NavLink to="favorite" style={{ marginLeft: '10px' }}>Favorite List</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Bai1;
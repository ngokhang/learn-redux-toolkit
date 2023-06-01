import React from 'react';
import { NavLink } from 'react-router-dom';

const App = () => {

  return (
    <div className='App'>
      <nav className='sidebar' style={{ display: 'flex', gap: '2rem', justifyContent: 'center', paddingTop: '2rem' }}>
        <NavLink to='/bai1'>Bai 1</NavLink>
        <NavLink to='/bai2'>Bai 2</NavLink>
      </nav>
      <h2>Redux Middleware</h2>
      <nav className='sidebar' style={{ display: 'flex', gap: '2rem', justifyContent: 'center', paddingTop: '2rem' }}>
        <NavLink to="redux-middleware/1">Bai 1</NavLink>
        <NavLink to='redux-middleware/2'>Bai 2</NavLink>
      </nav>
    </div>
  );
};

export default App;
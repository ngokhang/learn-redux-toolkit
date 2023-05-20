import React from 'react';
import FormAddStudent from './FormAddStudent';
import FormAddSubject from './FormAddSubject';
import ListStudents from './ListStudents';

const Bai2 = () => {
  return (
    <div className='bai2'>
      <div>
        <FormAddStudent />
        <FormAddSubject />
      </div>
      <ListStudents />
    </div>
  );
};

export default Bai2;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavoriteList, deleteUser } from '../../../store/slices/counterSlice';

const ListPhoneNumber = (props) => {
  const listPhone = useSelector((state) => state.listPhone.value);
  const dispatch = useDispatch();
  return (
    <>
      <ul style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
        {
          listPhone.map((item, index) => (
            <li key={`item-${index}`} style={{ display: 'flex', gap: '2rem' }}>
              <b>{item.username} - {item.phonenumber}</b>
              <button onClick={() => dispatch(addToFavoriteList({ username: item.username, phonenumber: item.phonenumber }))}>Add to favorite</button>
              <button onClick={() => dispatch(deleteUser(index))}>Delete</button>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default ListPhoneNumber;
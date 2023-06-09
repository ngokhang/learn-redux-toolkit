import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavoriteList, deleteUser, deleteUserFavorite } from '../../../store/slices/counterSlice';

const ListFavorite = (props) => {
  const listPhone = useSelector((state) => state.listPhone.favoriteList);
  const dispatch = useDispatch();
  return (
    <>
      <ul style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
        {
          listPhone.map((item, index) => (
            <li key={`item-${index}`} style={{ display: 'flex', gap: '2rem' }}>
              <b>{item.username} - {item.phonenumber}</b>
              <button onClick={() => dispatch(deleteUserFavorite(index))}>Delete</button>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default ListFavorite;
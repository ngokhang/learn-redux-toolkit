import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewTodo, deleteTodo, getTodoList, updateTodo } from '../../../store/slices/todoSlice';

const Bai1ReduxMiddleware = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todos.todoList);
  const [title, setTitle] = useState('');
  const [updating, setUpdating] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(getTodoList());
  }, [dispatch]);

  const handleClickAdd = () => {
    if (updating) {
      setUpdating(false);
      setTitle('');
      dispatch(updateTodo({ id, title }));
      return;
    }
    dispatch(createNewTodo({ id: todoList.length, title }));
    setTitle('');
  }

  const handleClickUpdate = ({ id, newTitle }) => {
    setUpdating(true);
    setTitle(newTitle);
    setId(id);
  }

  const handelClickDelete = (id) => {
    dispatch(deleteTodo(id));
  }

  return (
    <div>
      <div className="form">
        <div>
          <input type="text" placeholder='New todo...' onChange={e => setTitle(e.target.value)} value={title} />
          <button onClick={() => handleClickAdd()}>{updating ? 'Update' : 'Add'}</button>
        </div>
      </div>
      <ul className="todos">
        {
          todoList.length === 0 ? (
            <div>Because application used local db, so connect failed to DB. Please config your local DB with json-sever with port 4000 and data format : {JSON.stringify({
              "todos": [
                {
                  "id": 1,
                  "title": "Hello",
                  "status": false
                },
              ]
            })
            }. Thanks!</div>
          ) : (
            todoList.map((item, index) => (
              <li key={index}>
                <div>{item.title} - {item.status} <button onClick={() => handleClickUpdate({ id: index + 1, newTitle: item.title })}>Edit</button> - <button onClick={() => handelClickDelete(Number.parseInt(item.id))}>Delete</button></div>
              </li>
            ))
          )
        }
      </ul>
    </div>
  );
};

export default Bai1ReduxMiddleware;
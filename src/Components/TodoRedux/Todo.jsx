import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, fetchTodos } from './features/todoSlice';

export default function Todo() {
  const { list, isLoading } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: list.length + 1,
      title: inputRef.current.value,
    };
    dispatch(add(newTask));
  };
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  console.log('list', list);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='taskInput'>New Task:</label>
        <input type='text' name='taskInput' ref={inputRef} />
        <button>Submit</button>
      </form>
      <ul>
        {list.map((task) => (
          <li key={task.id}>
            <button onClick={() => dispatch(remove(task.id))}>X</button>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Todo from './Todo';
import { signOut } from './features/user/userSlice';

export default function AppTodo() {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/signin'>Sign In</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/todo'>Todo List</Link>
        <button onClick={() => dispatch(signOut())}>Sign out!</button>
      </nav>
      <Routes>
        <Route path='/' element={<h1>Todo App</h1>} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route
          path='/todo'
          element={
            <ProtectedRoute>
              <Todo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

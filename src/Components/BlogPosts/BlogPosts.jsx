import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/user/userSlice';

export default function BlogPosts() {
  const dispatch = useDispatch();
  const signIn = () => {
    dispatch(login());
  };
  return (
    <div>
      <h1>BlogPosts</h1>
      <button onClick={signIn}>Sign in with Google</button>
      <button>Sign out</button>
    </div>
  );
}

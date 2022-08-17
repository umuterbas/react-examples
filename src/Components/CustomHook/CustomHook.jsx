import React from 'react';
import useAxios from './hooks/useAxios';

export default function CustomHook() {
  //jsonplaceholder: https://jsonplaceholder.typicode.com/

  // const { data } = useAxios(
  //   'https://jsonplaceholder.typicode.com/posts',
  //   'post',
  //   { title: 'Test title', body: 'Test body' }
  // );
  const { data } = useAxios(
    'https://the-trivia-api.com/api/questions',
    'get',
    null
  );

  console.log('data in component', data);
  return <div>CustomHook</div>;
}

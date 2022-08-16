import React from 'react';

export default function CustomHook() {
  //jsonplaceholder: https://jsonplaceholder.typicode.com/

  const { data } = useAxios('url');
  return <div>CustomHook</div>;
}

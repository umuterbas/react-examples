import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ChildFunction from './ChildFunction';
import { ProfileContext } from './ProfileContext';

export default function FunctionalComponent() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

  const { profile } = useContext(ProfileContext);
  // useEffect(() => {
  //   console.log('every time that renders');
  // });
  // useEffect(() => {
  //   console.log('run once at first and never more');
  // }, []);
  // useEffect(() => {
  //   console.log('run first and only when text2 is updated');
  // }, [text2]);
  return (
    <div className='component'>
      <h1>Functional Component</h1>
      <h2>Hi, my name is {profile.name}</h2>
      <h2>{text}</h2>
      <input
        type='text'
        value={text2}
        onChange={(e) => setText2(e.target.value)}
      />
      <ChildFunction text={text} setText={setText} />
    </div>
  );
}

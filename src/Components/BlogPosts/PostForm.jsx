import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAPostToFirebase } from './features/posts/postsSlice';

export default function PostForm() {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.info.id);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('title', titleRef.current.value);
    console.log('body', bodyRef.current.value);
    const newPost = {
      userId,
      title: titleRef.current.value,
      body: bodyRef.current.value,
    };
    dispatch(postAPostToFirebase(newPost));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Post:</h2>
      <div>
        <label htmlFor='title'>Title</label>
        <input type='text' name='title' ref={titleRef} />
      </div>
      <div>
        <label htmlFor=''>Body</label>
        <textarea name='body' cols='30' rows='2' ref={bodyRef}></textarea>
      </div>
      <button>Submit Post</button>
    </form>
  );
}

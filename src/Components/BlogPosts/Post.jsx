import React from 'react';
import {
  removePost,
  removePostFromFirebase,
  updatePost,
  updatePostInFirebase,
} from './features/posts/postsSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function Post(props) {
  const { post } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.post.title);
  const [body, setBody] = useState(props.post.body);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removePostFromFirebase(id));
  };
  const handleEdit = () => {
    if (isEditing) {
      const updatedPost = { ...post, title, body };
      dispatch(updatePostInFirebase(updatedPost));
    }
    setIsEditing(!isEditing);
  };
  return (
    <article key={post.id}>
      {!isEditing ? (
        <>
          <button onClick={() => handleDelete(post.id)}>X</button>
          <button onClick={handleEdit}>Edit</button>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      ) : (
        <>
          <button onClick={handleEdit}>Done</button>
          <div>
            <label htmlFor=''>Title</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor=''>Body</label>
            <textarea
              name=''
              id=''
              cols='30'
              rows='2'
              value={body}
              onChange={(e) => setBody(e.target.value)}></textarea>
          </div>
        </>
      )}
    </article>
  );
}

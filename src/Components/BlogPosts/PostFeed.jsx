import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './features/posts/postsSlice';

export default function PostFeed() {
  const { list } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  console.log('list', list);
  return (
    <section>
      <h2>Post Feed</h2>
      {list.map((post) => (
        <article key={post.id}>
          <button>X</button>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
      <article>
        <h3>Title</h3>
        <p>Body</p>
      </article>
    </section>
  );
}

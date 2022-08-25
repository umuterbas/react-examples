import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsFromFirebase } from './features/posts/postsSlice';
import Post from './Post';

// const postsCollectionRef = database('posts');

export default function PostFeed() {
  const { list } = useSelector((state) => state.posts);
  const userId = useSelector((state) => state.user.info.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsFromFirebase(userId));
  }, [dispatch, userId]);
  console.log('list', list);

  return (
    <section>
      <h2>Post Feed</h2>
      {list.map((post, index) => (
        <Post post={post} index={index} />
      ))}
    </section>
  );
}

import React from 'react';
import PostFeed from './PostFeed';
import PostForm from './PostForm';

export default function BlogPosts() {
  return (
    <div>
      <h1>BlogPosts</h1>
      <PostForm />
      <PostFeed />
    </div>
  );
}

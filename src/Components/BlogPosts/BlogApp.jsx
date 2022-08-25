import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../TodoRedux/ProtectedRoute';
import BlogPosts from './BlogPosts';
import PostFeed from './PostFeed';
import PostForm from './PostForm';

const BlogApp = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/new-post'>New Post</Link>
        <Link to='/my-posts'>My posts</Link>
      </nav>
      <Routes>
        <Route path='/' element={<BlogPosts />} />
        <Route
          path='/new-post'
          element={
            <ProtectedRoute>
              <PostForm />
            </ProtectedRoute>
          }
        />
        <Route
          path='/my-posts'
          element={
            <ProtectedRoute>
              <PostFeed />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default BlogApp;

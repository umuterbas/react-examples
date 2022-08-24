import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const userId = useSelector((state) => state.user.info.id);
  console.log('userId', userId);
  if (!userId) return <Navigate to='/' />;
  return <>{children}</>;
}

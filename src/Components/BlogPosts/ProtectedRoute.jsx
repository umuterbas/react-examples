import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
  const userId = useSelector((state) => state.user.info.id);
  if (!userId) return <Navigate to={'/'} />;
  return <>{children}</>;
};

export default ProtectedRoute;

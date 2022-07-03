import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../app/hooks/useAuth';

const PublicRoutes = () => {
  const { isAuth } = useAuth();

  return !isAuth ? <Outlet /> : <Navigate to={'/dashboard'} />;
};

export default PublicRoutes;

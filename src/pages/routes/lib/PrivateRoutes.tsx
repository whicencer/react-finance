import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../app/hooks/useAuth';

const PrivateRoutes = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={'/'} />;
};

export default PrivateRoutes;
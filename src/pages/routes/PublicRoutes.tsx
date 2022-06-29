import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = () => {
  const isAuth = false;
  return !isAuth ? <Outlet /> : <Navigate to={'/home'} />;
};

export default PublicRoutes;
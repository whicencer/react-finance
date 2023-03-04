import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../app/hooks/useAuth';
import { PageContent } from '../../../components/Layouts/PageContent';

const PrivateRoutes = () => {
  const { isAuth } = useAuth();

  return isAuth
    ? <PageContent>
      <Outlet />
    </PageContent>
    : <Navigate to={'/'} />;
};

export default PrivateRoutes;
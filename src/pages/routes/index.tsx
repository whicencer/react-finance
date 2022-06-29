import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '../../components/ui/Loader';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { privateRoutes, publicRoutes } from './routes';

const Routing = () => {
  const mappedPrivate = privateRoutes.map((route) => {
    return (
      <Route path={route.path} element={<route.component />} key={route.key} />
    );
  });
  const mappedPublic = publicRoutes.map((route) => {
    return (
      <Route path={route.path} element={<route.component />} key={route.key} />
    );
  });

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PublicRoutes />}>
          {mappedPublic}
        </Route>
        <Route element={<PrivateRoutes />}>
          {mappedPrivate}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;

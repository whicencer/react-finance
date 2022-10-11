import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '../../shared/ui/Loader';
import NotFound from '../notFound';
import PrivateRoutes from './lib/PrivateRoutes';
import PublicRoutes from './lib/PublicRoutes';
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
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;

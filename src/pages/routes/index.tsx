import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '../../components/ui/Loader';
import { publicRoutes } from './routes';

const Routing = () => {
  const mappedRoutes = publicRoutes.map((route) => {
    return (
      <Route key={route.key} element={<route.component />} path={route.path} />
    );
  });

  return (
    <Suspense fallback={<Loader />}>
      <Routes>{mappedRoutes}</Routes>
    </Suspense>
  );
};

export default Routing;

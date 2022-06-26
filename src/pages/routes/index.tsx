import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';

const Routing = () => {
  const mappedRoutes = publicRoutes.map((route) => {
    return <Route key={route.key} element={<route.component />} path={route.path} />;
  });

  return <Routes>{mappedRoutes}</Routes>;
};

export default Routing;

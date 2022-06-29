import { lazy } from 'react';
import { RouteComponent } from './types';

const Home = lazy(() => import('../home'));
const NotFound = lazy(() => import('../notFound'));

export const publicRoutes: RouteComponent[] = [
  {
    path: '/',
    component: Home,
    key: 'home',
  },
  {
    path: '*',
    component: NotFound,
    key: '404',
  },
];

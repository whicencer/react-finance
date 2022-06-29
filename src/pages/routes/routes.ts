import { lazy } from 'react';
import { RouteComponent } from './types';

const Welcome = lazy(() => import('../welcome'));
const NotFound = lazy(() => import('../notFound'));
const Home = lazy(() => import('../home'));

export const publicRoutes: RouteComponent[] = [
  {
    path: '/',
    component: Welcome,
    key: 'welcome',
  },
  {
    path: '*',
    component: NotFound,
    key: '404',
  },
];

export const privateRoutes: RouteComponent[] = [
  {
    path: '/home',
    component: Home,
    key: 'home',
  },
];

import { lazy } from 'react';
import { RouteComponent } from './types';

const Welcome = lazy(() => import('../welcome'));
const Dashboard = lazy(() => import('../dashboard'));

export const publicRoutes: RouteComponent[] = [
  {
    path: '/',
    component: Welcome,
    key: 'welcome',
  },
];

export const privateRoutes: RouteComponent[] = [
  {
    path: '/dashboard',
    component: Dashboard,
    key: 'dashboard',
  },
];

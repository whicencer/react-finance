import { lazy } from 'react';
import { Investments } from '../investments';
import { RouteComponent } from './types';

const Welcome = lazy(() => import('../welcome'));
const Dashboard = lazy(() => import('../dashboard'));
const Transactions = lazy(() => import('../transactions'));

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
  {
    path: '/transactions',
    component: Transactions,
    key: 'transactions',
  },
  {
    path: '/investments',
    component: Investments,
    key: 'investments'
  }
];

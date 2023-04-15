import { lazy } from 'react';
import { RouteComponent } from './types';
import Signup from '@pages/signup';

const Welcome = lazy(() => import('../welcome'));
const Dashboard = lazy(() => import('../dashboard'));
const Transactions = lazy(() => import('../transactions'));
const Investments = lazy(() => import('../investments'));

export const publicRoutes: RouteComponent[] = [
  {
    path: '/',
    component: Welcome,
    key: 'welcome',
  },
  {
    path: '/signup',
    component: Signup,
    key: 'signup'
  }
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

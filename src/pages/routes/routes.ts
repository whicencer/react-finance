import Home from '../home';
import { RouteComponent } from './types';

export const publicRoutes: RouteComponent[] = [
  {
    path: '/',
    component: Home,
    exact: true,
    key: 'home'
  },
];

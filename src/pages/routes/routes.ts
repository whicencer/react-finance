import Home from '../home';
import NotFound from '../notFound';
import { RouteComponent } from './types';

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

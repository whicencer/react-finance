import compose from '../../utils/compose';
import AuthProvider from './authProvider';
import ReduxProvider from './reduxProvider';
import { RouterProvider } from './routerProvider';
import { StyledComponentProvider } from './themeProvider';

export const withProviders = compose(StyledComponentProvider, RouterProvider, ReduxProvider, AuthProvider);

import compose from '../../utils/compose';
import AuthProvider from './authProvider';
import ReduxProvider from './reduxProvider';
import { RouterProvider } from './routerProvider';
import { StyledComponentProvider } from './themeProvider';
import { ToastProvider } from './toastProvider';

export const withProviders = compose(StyledComponentProvider, RouterProvider, ReduxProvider, AuthProvider, ToastProvider);

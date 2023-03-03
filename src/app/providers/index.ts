import compose from '../../utils/compose';
import AuthProvider from './authProvider';
import ReduxProvider from './reduxProvider';
import StyledComponentProvider from './themeProvider';
import CurrencyProvider from './currencyProvider';
import ToastProvider from './toastProvider';
import CheckOnlineProvider from './checkOnlineProvider';
import RouterProvider from './routerProvider';

export const withProviders = compose(CheckOnlineProvider, StyledComponentProvider, RouterProvider, ReduxProvider, AuthProvider, ToastProvider, CurrencyProvider);

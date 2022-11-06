import compose from '../../utils/compose';
import AuthProvider from './authProvider';
import ReduxProvider from './reduxProvider';
import RouterProvider from './routerProvider';
import StyledComponentProvider from './themeProvider';
import CurrencyProvider from './currencyProvider';
import ToastProvider from './toastProvider';
import CheckOnlineProvider from './checkOnlineProvider';

export const withProviders = compose(CheckOnlineProvider, StyledComponentProvider, RouterProvider, ReduxProvider, AuthProvider, ToastProvider, CurrencyProvider);

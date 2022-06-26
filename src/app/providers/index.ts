import compose from '../../utils/compose';
import { RouterProvider } from './routerProvider';
import { StyledComponentProvider } from './themeProvider';

export const withProviders = compose(StyledComponentProvider, RouterProvider);

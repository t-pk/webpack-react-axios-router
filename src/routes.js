import React from 'react';

import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';

const LoginPage = React.lazy(() => import('./pages/login'));
const HomePage = React.lazy(() => import('./pages/home'));
const AccountPage = React.lazy(() => import('./pages/account'));
const NotFoundPage = React.lazy(() => import('./pages/not-found'));

const routes = [
  {
    path: '/',
    exact: true,
    layout: PrivateLayout,
    main: HomePage,
    isPrivate: true,
  },
  {
    path: '/account',
    exact: true,
    layout: PrivateLayout,
    main: AccountPage,
    isPrivate: true,
  },
  {
    path: '/login',
    exact: true,
    layout: PublicLayout,
    main: LoginPage,
  },
  {
    path: '*',
    layout: PublicLayout,
    main: NotFoundPage,
  },
];

export default routes;

import React, { Suspense } from 'react';
import { Switch, Router } from 'react-router-dom';
import { Spin } from 'antd';
import shortid from 'shortid';
import routes from './routes';
import { history } from './utils/history';
import { PrivateRoute, PublicRoute } from './layout';

const App = () => {
  const showContent = (routes) => {
    if (!routes.length) return;

    const result = routes.map((route) => {
      return route.isPrivate ? (
        <PrivateRoute
          key={shortid()}
          path={route.path}
          exact={route.exact}
          component={route.main}
          layout={route.layout}
        />
      ) : (
        <PublicRoute
          key={shortid()}
          path={route.path}
          exact={route.exact}
          component={route.main}
          layout={route.layout}
        />
      );
    });

    return (
      <Suspense fallback={<Spin />}>
        <Switch>{result}</Switch>
      </Suspense>
    );
  };
  return <Router history={history}> {showContent(routes)} </Router>;
};

export default App;

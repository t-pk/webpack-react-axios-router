import React, { Suspense } from 'react';
import { Switch, Router } from 'react-router-dom';
import { Spin } from 'antd';
import shortid from 'shortid';
import routes from './routes';
import { history } from './utils/history';
import { PrivateRoute, PublicRoute } from './layout';

const App = () => {
  const showContent = routes => {
    let result = null;

    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return route.isPrivate ? (
          <PrivateRoute
            key={shortid.generate()}
            path={route.path}
            exact={route.exact}
            component={route.main}
            layout={route.layout}
          />
        ) : (
          <PublicRoute
            key={shortid.generate()}
            path={route.path}
            exact={route.exact}
            component={route.main}
            layout={route.layout}
          />
        );
      });
    }

    return (
      <Switch>
        <Suspense
          fallback={
            <Spin>
              <div className="is-spining" />
            </Spin>
          }
        >
          {result}
        </Suspense>{' '}
      </Switch>
    );
  };
  return <Router history={history}> {showContent(routes)} </Router>;
};

export default App;

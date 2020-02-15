import React, { Suspense } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import routes from './routes';
import { history } from './utils/history';
import { PrivateRoute, PublicRoute } from './layout';
import { Spin } from 'antd';

class App extends React.Component {
  showContent = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return route.isPrivate ? (
          <PrivateRoute
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
            layout={route.layout}
          />
        ) : (
          <PublicRoute
            key={index}
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

  render() {
    return <Router history={history}> {this.showContent(routes)} </Router>;
  }
}

export default App;

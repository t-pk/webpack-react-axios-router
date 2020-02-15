import React from 'react';
import { Switch, Router } from 'react-router-dom';
import routes from './routes';
import { history } from './utils/history';
import { PrivateRoute, PublicRoute } from './layout';
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
    console.log(result);
    return <Switch> {result} </Switch>;
  };

  render() {
    return <Router history={history}> {this.showContent(routes)} </Router>;
  }
}

export default App;

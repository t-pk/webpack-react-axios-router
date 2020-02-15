import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRouteMode = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token') ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )
      }
    />
  );
};

export { PrivateRouteMode as PrivateRoute };

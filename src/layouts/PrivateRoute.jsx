/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LOGIN_URL, TOKEN_KEY } from '../constants';

const PrivateRoute = ({
  component: Component,
  layout: Layout,
  exact,
  path,
}) => {
  return (
    <Route
      {...{ exact, path }}
      render={(props) => {
        return localStorage.getItem(TOKEN_KEY) ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: LOGIN_URL,
            }}
          />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  layout: PropTypes.elementType.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;

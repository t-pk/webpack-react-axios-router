import React, { Suspense } from 'react';
import { Layout, Spin } from 'antd';
import PropTypes from 'prop-types';
import HeaderPage from '../components/header';

const PrivateLayout = ({ children }) => (
  <Layout className="main-layout">
    <HeaderPage />
    <div className="main-container">
      <Suspense
        fallback={
          <Spin>
            <div className="is-spining" />
          </Spin>
        }
      >
        <div className="main-content">{children}</div>
      </Suspense>
    </div>
  </Layout>
);

PrivateLayout.defaultProps = {
  children: null,
};

PrivateLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

export default PrivateLayout;

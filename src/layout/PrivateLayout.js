import React, { Suspense } from 'react';
import { Layout, Spin } from 'antd';

export const PrivateLayout = props => (
  <Layout className="main-layout">
    <div className="main-container">
      <Suspense
        fallback={
          <Spin>
            <div className="is-spining" />
          </Spin>
        }
      >
        <div className="main-content">{props.children}</div>
      </Suspense>
    </div>
  </Layout>
);

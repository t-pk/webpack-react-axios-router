import React, { Suspense } from 'react';
import { Layout, Spin } from 'antd';

export const PrivateLayout = props => (
  <Layout className="main-layout">
    <div className="main-container">
      <div className="main-content">{props.children}</div>
    </div>
  </Layout>
);

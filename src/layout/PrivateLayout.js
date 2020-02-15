import React from 'react';
import { Layout } from 'antd';

export const PrivateLayout = props => (
  <Layout>
    <>{props.children}</>
  </Layout>
);

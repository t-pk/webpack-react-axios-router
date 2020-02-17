import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import LayoutP from './Layout';

const { Header } = Layout;

const DynamicPage = () => {
  return (
    <LayoutP>
      <Link to="/">This page was loaded asynchronously!!!</Link>
    </LayoutP>
  );
};

export default DynamicPage;

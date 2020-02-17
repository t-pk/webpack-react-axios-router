import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import LayoutP from './Layout';

const { Header } = Layout;

const Test = () => {
  return (
    <LayoutP>
      <Header as="h2">Test</Header>
      <Link to="/">Test!!!</Link>
    </LayoutP>
  );
};

export default Test;

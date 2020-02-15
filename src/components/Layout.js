import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Divider, Icon } from 'antd';
import './layout.scss';
const { Header } = Layout;

const LayoutP = ({ children }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header as="h1" className="h1">
        webpack-for-react
      </Header>
      {children}
      <Divider />
      <p className="pullRight">
        Made with <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />{' '}
        by Tai Pham
      </p>
      <img src="../../src/images/test.jpeg" alt="Paris" className="img" />
    </div>
  );
};

export default LayoutP;

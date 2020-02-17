import React from 'react';
import { Icon } from 'antd';
import LayoutP from './Layout';

const NoMatch = () => {
  return (
    <LayoutP>
      <Icon type="minus circle" theme="twoTone" twoToneColor="#eb2f96" />
      <strong>Page not found!</strong>
    </LayoutP>
  );
};

export default NoMatch;

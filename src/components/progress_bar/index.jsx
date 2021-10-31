import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';
import './style.scss';

const ProgressBar = ({ percent }) => {
  return (
    <>
      <Progress
        strokeColor={{
          from: '#50C878',
          to: '#50C878',
        }}
        style={{ color: 'white', padding: '14px' }}
        percent={Number(percent).toFixed(1)}
        status="active"
      />
    </>
  );
};

ProgressBar.propTypes = {
  percent: PropTypes.number,
};

export default ProgressBar;

import React, { Suspense } from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

const PublicLayout = ({ children }) => {
  return (
    <Suspense
      fallback={
        <Spin>
          <div className="is-spining-full" />
        </Spin>
      }
    >
      <div className="public-layout">{children}</div>
    </Suspense>
  );
};

PublicLayout.defaultProps = {
  children: null,
};

PublicLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

export default PublicLayout;

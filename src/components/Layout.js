import React from "react";
import { Link } from "react-router-dom";
import { Layout, Divider, Icon } from "antd";
import { pullRight, h1 } from "./layout.less";
const { Header } = Layout;

const LayoutP = ({ children }) => {
  return (
    <div style={{textAlign: 'center'}}>
      <Link to="/">
        <Header as="h1" className={h1}>
          webpack-for-react
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={pullRight}>
        Made with <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />{" "}
        by Tai Pham
      </p>
      <img src="../../src/images/test.jpeg" alt="Paris" className="img"/>
    </div>
  );
};

export default LayoutP;

import React, { useEffect, useState } from 'react';
import { Layout, Modal } from 'antd';
import ProgressBar from '../progress';
import './header.scss';

const { Header } = Layout;

const HeaderPage = () => {
  const [count, setCount] = useState(0);
  const [css, setCss] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [content, setContent] = useState(
    'please waiting, system is processing...',
  );

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    setTimeout(() => {
      if (css === 0) {
        setCss(90);
      } else {
        setCss(0);
      }
    }, 5000);
    setTimeout(() => {
      setCount(count + 0.2);
    }, 100);
    if (count >= 100) {
      // setIsModalVisible(true);
      setContent('please click me show on result.!');
    }
  });

  return (
    <Header className="header" style={{ background: 'white' }}>
      <div className="container">
        <a onClick={showModal} className="social-container twitter">
          <div
            className="social-cube"
            style={{
              transform: `translateZ(-18px) rotateX(${css}deg)`,
            }}
          >
            <div className="front">{content}</div>
            <div className="bottom">
              {' '}
              <ProgressBar percent={count} />
            </div>
          </div>
        </a>
      </div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Header>
  );
};

export default HeaderPage;

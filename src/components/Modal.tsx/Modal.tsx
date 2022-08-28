import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const ModalComponent = ({text}: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        { text }
      </Modal>
    </>
  );
};

export default ModalComponent;
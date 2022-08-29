import React, {useState} from 'react';
import { Card, Button, Form, Input, Modal } from 'antd';
import { User } from '../../types';
import { useNavigate } from 'react-router-dom'
import './LoginForm.css'

const LoginForm = () => {

  const navigate = useNavigate()
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const onFinish = (values: User) => {
    if (values.username === 'admin' && values.password === 'admin') {
      localStorage.logged = true
      navigate(0)
    } else if (values.username !== 'admin' && values.password !== 'admin') {
      setIsModalVisible(true);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div id="container">
      <Card title="Log in" className='Card' bordered={false}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
          >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Modal
        visible={isModalVisible}
        closable={false}
        footer={
          <Button type="primary" key="back" onClick={handleCancel}>
            Try again
          </Button>
        }
        >
        <h4>Username and/or password are incorrect. Please, try again.</h4>
      </Modal>
    </div>
  );
};

export default LoginForm
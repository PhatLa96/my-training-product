import React, { Fragment } from 'react';
import { Form, Input, Button, Checkbox, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import './LoginPages.scss';
import { AuthContext } from '../AuthContext';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
interface LoginPagesProps {}

export default function LoginPages(props: LoginPagesProps) {
  const { toggleAuth } = useContext(AuthContext);

  const history = useHistory();
  const onFinish = (values: any) => {
    console.log('Success:', values);
    toggleAuth({ username: values.username, password: values.password });
    history.push('/admin');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const handleLoginClick = () => {
    toggleAuth({ username: '12', password: 'phat' });
    history.push('/admin');
  };
  return (
    <Fragment>
      <div className="wrapper">
        <div className="container">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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

            <Form.Item>
              <Button
                // onClick={handleLoginClick}
                type="primary"
                htmlType="submit"
                shape="round"
                size="middle"
                block={true}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Fragment>
  );
}

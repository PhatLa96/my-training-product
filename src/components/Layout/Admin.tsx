import { PieChartOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { AuthContext } from 'features/auth/AuthContext';
import ProductFeature from 'features/product';
import React, { useContext } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './Admin.scss';
const { Header, Footer, Sider, Content } = Layout;
interface AdminProps {}

export default function Admin({}: AdminProps) {
  const history = useHistory();
  const { toggleLogout } = useContext(AuthContext);
  const handleLogout = () => {
    toggleLogout({ username: '', password: '' });
    history.push('/login');
  };
  return (
    <>
      <Layout>
        <Header>
          <div className="header">
            <img
              src="https://cdn.hdwebsoft.com/wp-content/uploads/2021/08/hdwebsoft-logo-blue-new.svg"
              alt="logo"
              className="header_logo"
            />
            <Button type="primary" danger onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </Header>
        <Layout>
          <Sider>
            <div className="sider">
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  Product List
                </Menu.Item>
              </Menu>
            </div>
          </Sider>
          <Content style={{ margin: '0 16px' }}>
            <Switch>
              <Route path="/admin/product/">
                <ProductFeature />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

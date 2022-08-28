import { useNavigate,Link } from 'react-router-dom'
import { Breadcrumb, Layout, Menu, Button } from 'antd';
import '../styles/index.css'
import { LogoutOutlined } from '@ant-design/icons';
import MenuDivider from 'antd/lib/menu/MenuDivider';

const { Header, Content, Footer } = Layout;

const Index = () => {

  const navigate = useNavigate()
  
  // const logout = () => {
  //   localStorage.removeItem('logged')
  //   navigate(0)
  // }

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal">
            <Link to="/geographical-data">
              <Menu.Item>Geographical data</Menu.Item>
            </Link>
            <Link to="/faqs">
              <Menu.Item>FAQs</Menu.Item>
            </Link>
            <Menu.Divider></Menu.Divider>
            <Link to="/faqs">
              <Button ghost={true} icon={<LogoutOutlined />} />
            </Link>
          </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )

};

export default Index;
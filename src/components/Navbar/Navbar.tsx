import {Link} from 'react-router-dom'
import { LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import './Navbar.css'

const { Header } = Layout

const Navbar = () => {

  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal">
          <Link to="/geographical-data">
            <Button className='btn'>Geographical data</Button>
          </Link>
          <Link to="/faqs">
            <Button className='btn'>FAQs</Button>
          </Link>
          <div className='divider' />
          <Link to="/faqs">
            <Button className='btn' ghost={true} icon={<LogoutOutlined />} />
          </Link>
        </Menu>
    </Header>
  )

} ;

export default Navbar;
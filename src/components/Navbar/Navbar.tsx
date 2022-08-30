import {Link, useNavigate} from 'react-router-dom'
import { LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import './Navbar.css'

const { Header } = Layout

const Navbar = () => {

  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('logged')
    navigate(0)
  }

  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal">
          <Link to="/">
            <Button className='btn'>Geographical data</Button>
          </Link>
          <Link to="/faqs">
            <Button className='btn'>FAQs</Button>
          </Link>
          <div className='divider' />
          <Button onClick={logout} className='btn logout' ghost={true} icon={<LogoutOutlined />} />
        </Menu>
    </Header>
  )

} ;

export default Navbar;
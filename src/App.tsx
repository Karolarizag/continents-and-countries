import './App.css';
import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login';
import Home from './pages/Home'
import FAQs from './pages/Faqs';

const App = () => {

  return (
    <div className="App">

        {
          localStorage.logged 
          ? (
            <>
              <Layout className="layout">
                <Navbar />
              </Layout>
            </>
            )
          : <Login />
        }
      <Routes>
        <Route index element={<Home />} />
        <Route index element={<Login />} />
        <Route path='/faqs' element={<FAQs/>} />
      </Routes>
    </div>
  );
};

export default App;

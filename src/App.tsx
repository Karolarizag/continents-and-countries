import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Index from './pages/Index';
import GeographicalData from './pages/GeographicalData';
import FAQs from './pages/Faqs';

const App = () => {

  return (
    <div className="App">

      <Routes>
        {
          localStorage.logged 
          ? <Route index element={<Index />} />
          : <Route index element={<Login />} />
        }
        <Route path='/geographical-data' element={<GeographicalData/>} />
        <Route path='/faqs' element={<FAQs/>} />
      </Routes>

    </div>
  );
};

export default App;

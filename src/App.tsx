import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import FAQs from './pages/Faqs/Faqs'
import CountryPage from './pages/Country/Country'
import Layout from './components/Layout/Layout'

const App = () => {

  const loggedIn = localStorage.user ? true : false

  return (
    <div className="App">
      
      {
        loggedIn
        ? <Layout />
        : <Login />

      }

      <Routes>
        <Route index element={<Home />} />
        <Route index element={<Login />} />
        <Route path='/:code' element={<CountryPage />} />
        <Route path='/faqs' element={<FAQs/>} />
      </Routes>
    </div>
  )
}

export default App

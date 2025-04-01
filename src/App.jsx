import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Deal from './pages/Deal';
import Mydeals from './pages/Mydeals';
import Negotiate from './pages/Negotiate';
const App = () => {
  const user = useSelector(state=>state.userInfo.isautenticated)
  
  return (
    <div className='h-screen flex flex-col' >
      <Navbar />
      <Toaster />
      <Routes>
        <Route path='/' element={user? <Home />: <Navigate to="login" />} />
        <Route path='/signup' element={user ? <Home />:<Signup />} />
        <Route path='/login' element={user? <Home />: <Login />} />
        <Route path='/deals' element={<Deal />} />
        <Route path='/myDeals' element={<Mydeals />} />
        <Route path='/negotiate/:dealId' element={<Negotiate />} />
        <Route path='/negotiate' element={<Negotiate />} />
      </Routes>
    </div>
  )
}

export default App
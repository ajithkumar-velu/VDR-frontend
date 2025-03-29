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
const App = () => {
  const user = useSelector(state=>state.userInfo.isautenticated)
  
  return (
    <div  >
      <Navbar />
      <Toaster />
      <Routes>
        <Route path='/' element={user? <Home />: <Navigate to="login" />} />
        <Route path='/signup' element={user ? <Home />:<Signup />} />
        <Route path='/login' element={user? <Home />: <Login />} />
        <Route path='/deals' element={<Deal />} />
        <Route path='/myDeals' element={<Mydeals />} />
      </Routes>
    </div>
  )
}

export default App
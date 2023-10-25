import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Cart from './pages/Menu/Cart';
import TrackOrder from './pages/TrackOrder';
import ProtectRoutes from './store/ProtectRoutes';
import Admin from './admin';
import Login from './pages/Login';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/order' element={<TrackOrder />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/admin/*' element={<ProtectRoutes><Admin /></ProtectRoutes>} />
      </Routes>
    </div>
  );
}

export default App;

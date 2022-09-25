import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Ecommerce from './pages/ecommerce';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Ecommerce />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
  );
}

export default App;

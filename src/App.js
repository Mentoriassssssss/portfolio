import React from 'react'
import './App.css'

import Home from './pages/home';
import Navbar from './components/navbar';

import {Routes, Route, useLocation} from 'react-router-dom';

function App() {

  const location = useLocation();

  return (
    <>
    <Navbar/>
    <Routes location={location} key={location.pathname}>
      <Route index element={<Home />}/>
      <Route path='/about'/>
    </Routes>
    </>
  );
}

export default App;

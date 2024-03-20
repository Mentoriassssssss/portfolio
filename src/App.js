import React from 'react'
import './App.css'

import Home from './pages/home';
import FlipCardPage from './pages/flipcard';

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation();

  return (
    <div className='bg-[var(--body-color)]'>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path='/about' />
          <Route path='/flipcard' element={<FlipCardPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

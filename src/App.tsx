import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainElement, AboutElement, ShopElement } from './components';

import "bootstrap/dist/js/bootstrap.bundle.min"
import "./style/global.scss"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainElement />} />
        <Route path="/shop" element={<ShopElement />} />
        <Route path="/about" element={<AboutElement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
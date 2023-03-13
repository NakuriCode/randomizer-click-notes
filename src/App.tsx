import React, { ReactElement } from 'react';
import StartPage from './scenes/start-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FF4FEShopClicker from './scenes/ff4fe-shop-clicker';

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/ff4fe-shop-clicker" element={<FF4FEShopClicker />} />
      </Routes>
    </BrowserRouter>
  );
}

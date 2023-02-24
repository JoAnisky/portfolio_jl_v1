import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './assets/sass/styles.scss';
import App from './App';
import NotFound from './pages/NotFound';
import Legals from './pages/Legals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/legals" element={<Legals/>}/>
    </Routes>
  </BrowserRouter>
);
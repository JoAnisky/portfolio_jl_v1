import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './assets/sass/styles.scss';
import App from './App';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </HashRouter>
);
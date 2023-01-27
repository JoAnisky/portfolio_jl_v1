import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './pages/Home/components/Header';

import About from './pages/About';
import Knowledges from './pages/Knowledges/Knowledges';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/competences" element={<Knowledges/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      <div className="layout__page">
        <div className="content">
          <main>
            <Home/>
            <About/>
            <Knowledges/>
            <Portfolio/>
            <Contact/>
          </main>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About';
import Knowledges from './pages/Knowledges/Knowledges';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Knowledges" element={<Knowledges/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route element={NotFound}/>
        </Routes>
      </BrowserRouter>
      <main>
        <About/>
        <Knowledges/>
        <Portfolio/>
        <Contact/>
      </main>
    </>
  );
}

export default App;
import { useState, useEffect } from 'react';
import Loader from './pages/Loader';
import Home from './pages/Home/Home';
import Header from './pages/Home/Header';
import About from './pages/About/About';
import Knowledges from './pages/Knowledges/Knowledges';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer';

const App = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoader(false);
    }, 3800)

  }, [])

  return loader ? (<Loader/>) : (
    <>

      <Header/>
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
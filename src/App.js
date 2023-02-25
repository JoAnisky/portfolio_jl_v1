import { useState, useEffect } from 'react';
import Loader from './pages/Loader';
import Home from './pages/Home/Home';
import Header from './pages/Home/Header';
import About from './pages/About/About';
import Knowledges from './pages/Knowledges/Knowledges';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer';
import ReactGA from 'react-ga';
import BtnUp from './components/BtnUp';
const TRACKING_ID = "G-K9JTEQ96LB";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  const [loader, setLoader] = useState(true);
  const [showButtonUp, setShowButtonUp] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      setLoader(false);
    }, 3000)

  }, [])

  useEffect(() => {
      const handleScrollButtonVisibility = () => {
          window.scrollY > 300 ? setShowButtonUp(true) : setShowButtonUp(false);
      }
      window.addEventListener('scroll', handleScrollButtonVisibility);
      return () => {
          window.removeEventListener('scroll', handleScrollButtonVisibility);
      }
  }, []);

  return loader ? (<Loader/>) : (
    <>
      <Header/>
      <div className="layout__page">
        <div className="content">
          <main>
          {showButtonUp && <BtnUp/>}
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
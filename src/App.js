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
const TRACKING_ID = "G-K9JTEQ96LB";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoader(false);
    }, 0)

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
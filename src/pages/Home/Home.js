// import HomeParallax from './HomeParallax';
// import Navigation from "../../components/NavigationTop";

const Home = () => {

    return (  
        <header className='hello-container'>
        {/* <Navigation/> */}
            <div className="hello">
                <p className='hello__pre'>Bonjour, je suis</p>
                <h1 className="hello__title">Jonathan Loré<span className='hello__title__dot'>.</span></h1>
                <p className="hello__subtitle">Développeur web Frontend</p>
            </div>
        </header>
    )
}

export default Home;
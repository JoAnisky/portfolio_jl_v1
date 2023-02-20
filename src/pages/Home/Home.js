import React from 'react';

const Home = () => {
    return (
        <section className='hello' id="home">
            <div className="hello__container">
                <div className="slidein-welcome-anim">
                    <p className='hello__hi'>Bonjour, je suis</p>
                </div>
                <div className="slidein-welcome-anim">
                    <h1 className="hello__main-title">Jonathan Loré<span className='hello__main-title__dot'>.</span></h1>
                </div>
                <div className="slidein-welcome-anim">
                    <h3 className="hello__subtitle">Développeur web Frontend</h3>
                </div>
            </div>
        </section>
    );
}

export default Home;

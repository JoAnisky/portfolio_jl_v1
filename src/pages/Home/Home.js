import React from 'react';

const Home = () => {
    return (
        <section className='hello'>
            <div className="hello__container">
                <div className="fadein-welcome">
                    <p className='hello__hi'>Bonjour, je suis</p>
                </div>
                <div className="fadein-welcome">
                    <h1 className="hello__main-title">Jonathan Loré<span className='hello__main-title__dot'>.</span></h1>
                </div>
                <div className="fadein-welcome">
                    <h3 className="hello__subtitle">Développeur web Frontend</h3>
                </div>
            </div>
        </section>
    );
}

export default Home;

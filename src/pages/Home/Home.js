import React from 'react';

const Home = () => {
    return (
        <>
            <div className='hello-container'>
                <div className="hello">
                        <p className='hello__pre'>Bonjour, je suis</p>
                        <h1 className="hello__title">Jonathan Loré<span className='hello__title__dot'>.</span></h1>
                        <p className="hello__subtitle">Développeur web Frontend</p>
                </div>
            </div>
        </>
    );
}

export default Home;

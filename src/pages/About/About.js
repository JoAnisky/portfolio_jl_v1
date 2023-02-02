import React from 'react';
import SectionsTitles from '../../components/SectionsTitles';
import ProfilePictures from './ProfilePictures';

const About = () => {
    return (
        <section className='about' id="about">
            <SectionsTitles name="A Propos"/>
            <div className="about__inner">
                    <div className='about__prez'>
                            <p>Bonjour ! mon nom est Jonathan , je suis développeur web Front end.</p>
                            <p>Tombé dans le monde du web en 2007 avec HTML et CSS, je suis passionné par  les nouvelles technologies et le graphisme.</p>
                            <p>J'aime créer des sites web vivants et interactifs.</p>
                            <p>Vous trouverez sur ce site web mes <a className="links" href="#portfolio">réalisations</a> et un formulaire de <a className="links" href="#portfolio">contact</a> pour faire connaissance
                                (pourquoi pas autour d'un bon café ? &#9749;).</p>
                            <p>Je vous souhaite une bonne visite.</p>
                    </div>
                    <div className="about__picture-container">
                        <ProfilePictures/>
                    </div>
            </div>

        </section>
    );
}

export default About;

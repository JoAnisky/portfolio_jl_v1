import React from 'react';
import SectionsTitles from '../../components/SectionsTitles';
import ProfilePictures from './ProfilePictures';

const About = () => {
    return (
        <section className='about' id="about">
            <SectionsTitles name="A Propos"/>
            <div className="about__inner">
                    <div className='about__prez'>
                            <p>Bonjour ! je suis <strong>Jonathan Lor&eacute;</strong>, d&eacute;veloppeur web Front end.</p>
                            <p>Tomb&eacute; dans le monde du web en 2007, j'ai d&eacute;but&eacute; avec HTML et CSS. Je suis passionn&eacute; par  les nouvelles technologies et le graphisme.</p>
                            <p>J'aime créer des sites web vivants et interactifs.</p>
                            <p>Vous trouverez ici mes diff&eacute;rentes <a className="links" href="#portfolio">réalisations</a> et un formulaire de <a className="links" href="#portfolio">contact</a> pour faire connaissance
                                (pourquoi pas autour d'un bon caf&eacute; ? &#9749;).</p>
                            <p>Je vous souhaite une bonne visite.</p>
                    </div>
                    <div className='picture-wrapper'>
                        <div className="picture">
                            <div className='picture__img'>
                                <div className='picture__container'>
                                    <ProfilePictures/>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>

        </section>
    );
}

export default About;

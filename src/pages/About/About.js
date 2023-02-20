import  { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import SectionsTitles from '../../components/SectionsTitles';
import ProfilePictures from './ProfilePictures';

const About = () => {
    const targetRef = useRef(null);
    const isVisible = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0
    }, targetRef);

    return (
        <>
           <section ref={targetRef} className={`about ${!isVisible ? "" : "slideup-anim"}`} id="about">
            <SectionsTitles name="A Propos"/>
                <div className="about__inner">
                    <div className={`about__prez ${!isVisible ? "" : "slidein-anim"}`}>
                            <p>Bonjour ! je suis <strong>Jonathan Lor&eacute;</strong>, d&eacute;veloppeur web Front end.</p>
                            <p>Tomb&eacute; dans le monde du web en 2007, j'ai d&eacute;but&eacute; avec HTML et CSS. Je suis passionn&eacute; par  les nouvelles technologies et le graphisme.</p>
                            <p>J'aime cr&eacute;er des sites web vivants et interactifs.</p>
                            <p>Vous trouverez ici mes diff&eacute;rentes <a className="links" href="#portfolio">r&eacute;alisations</a> et un formulaire de <a className="links" href="#portfolio">contact</a> pour faire connaissance
                                (pourquoi pas autour d'un bon caf&eacute; ? &#9749;).</p>
                            <p>Je vous souhaite une bonne visite.</p>
                    </div>
                    <div className={`picture-wrapper ${!isVisible ? "" : "slidein-anim"}`}>
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
        </>
    );
}

export default About;

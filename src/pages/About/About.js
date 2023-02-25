import  { useRef, lazy, Suspense } from 'react';
import { HashLink } from 'react-router-hash-link';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import SectionsTitles from '../../components/SectionsTitles';
const ProfilePictures = lazy(() => import ('./ProfilePictures'));

const About = () => {
    const targetRef = useRef(null);
    const isVisible = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.4
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
                            <p>Vous trouverez ici mes diff&eacute;rentes <HashLink className="links" smooth to="/#portfolio">r&eacute;alisations</HashLink> et un formulaire de <HashLink className="links" smooth to="/#contact">contact</HashLink> pour faire connaissance
                                (pourquoi pas autour d'un bon caf&eacute; ? &#9749;).</p>
                            <p>Je vous souhaite une bonne visite.</p>
                    </div>
                    <div className={`picture-wrapper ${!isVisible ? "" : "slidein-anim"}`}>
                        <div className="picture">
                            <div className='picture__img'>
                                <div className='picture__container'>
                                    <Suspense fallback={<div>Chargement...</div>}>
                                        <ProfilePictures/>
                                    </Suspense>
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

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
            <SectionsTitles name="À Propos"/>
                <div className="about__inner">
                    <div className={`about__prez ${!isVisible ? "" : "slidein-anim"}`}>
                        <p>Bonjour ! Je suis <strong>Jonathan Lor&eacute;</strong>, d&eacute;veloppeur web fullStack.</p>
                        <p>Passionné par l'informatique, les nouvelles technos et le graphisme, je crée des applications web innovantes avec React et Symfony.</p>
                        <p>Mon expertise couvre le back-end (PHP, MySQL) et le front-end (HTML/CSS, SCSS, TypeScript).</p>
                        <p>Je suis à l'écoute d'opportunités pour concevoir des solutions web toujours plus performantes et centrées sur l'utilisateur.</p>
                        <p>Vous trouverez ici mes diff&eacute;rentes <HashLink className="links" smooth to="/#portfolio">r&eacute;alisations</HashLink> et un formulaire de <HashLink className="links" smooth to="/#contact">contact</HashLink> pour faire connaissance
                            (autour d'un bon caf&eacute;/th&eacute; ? &#9749;).</p>
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

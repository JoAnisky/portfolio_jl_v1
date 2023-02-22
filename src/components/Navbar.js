import { useState, useRef, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import useDeviceDetect from '../hooks/useDeviceDetect';
import MainLogo from './MainLogo';
import MenuBurger from './MenuBurger';
import BtnResume from './BtnResume';


const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);
    const linksRef = useRef([]);
    const {isMobile} = useDeviceDetect();

    const linksList  = [
        {id:1, href:"about", title:"A propos"},
        {id:2, href:"knowledges", title:"Technos"},
        {id:3, href:"portfolio", title:"Portfolio"},
        {id:4, href:"contact", title:"Contact"}
    ];

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
        document.body.style.overflow = !showLinks && isMobile ?  "hidden" : "auto";
    };
    // Ajoute les <li> dans un tableau de reférences (linksRef)
    const addToRefsLinks = (elem) => {
        if(elem && !linksRef.current.includes(elem)){
            linksRef.current.push(elem);
        }
    };

    useEffect(() => {
        let animDuration = 0.1;
        let animDelay = 0.4;

        linksRef.current.forEach(link => {
            link.style.transition = showLinks && isMobile ? `${(animDelay += 0.05)}s ${animDuration}s all ease-in-out` : `${(animDelay += 0.05)}s ${animDuration}s all in-out-back`;
            link.style.transform = showLinks && isMobile ? "translateX(-650px)" : "";
        })

    })

    const menuLinks = linksList.map(link => {
        return(
            <li ref={addToRefsLinks} key={link.id} className='navbar__item'>
                <HashLink smooth to={`/#${link.href}`} className='navbar__link' onClick={handleShowLinks}>{link.title}</HashLink>
            </li>
        );
    });

    return (
        <nav className="navbar menu-slideup-anim">
            <div className="navbar-mobile">
                <div className="navbar-mobile__container">
                    <MainLogo visible={showLinks && isMobile}/>
                    <MenuBurger visible={showLinks} handleShow={handleShowLinks}/>
                </div>
            </div>
            <div className={`navbar__container ${showLinks ? "show-nav" : "hide-nav"}`}>
                <ul className='navbar__links'>
                    {menuLinks}
                    <li ref={addToRefsLinks} className="btn-resume" >
                        <BtnResume handleShow={handleShowLinks}/>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
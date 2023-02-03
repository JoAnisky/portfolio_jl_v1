import React from 'react';
import MainLogo from './MainLogo';
import MenuBurger from './MenuBurger';
import BtnResume from './BtnResume';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);
    const linksRef = useRef([]);

    const linksList  = [
        {id:1, href:"about", title:"A propos"},
        {id:2, href:"knowledges", title:"Compétences"},
        {id:3, href:"portfolio", title:"Portfolio"},
        {id:4, href:"contact", title:"Contact"}
    ];      
    
    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    };

    const addToRefsLinks = (elem) => {
        if(elem && !linksRef.current.includes(elem)){
            linksRef.current.push(elem);
        }
    };
    
    useEffect(() => {
        let animDuration = 0.1;
        let animDelay = 0.4;
        linksRef.current.forEach(link => {        
            link.style.transition = showLinks ? `${(animDelay += 0.05)}s ${animDuration}s all ease-in-out` : `${(animDelay += 0.05)}s ${animDuration}s all in-out-back`;
            link.style.transform = showLinks ? "translateX(0px)" : "translateX(650px)";
        })
    })

    const menuLinks = linksList.map(link => {
        return(
            <li ref={addToRefsLinks} key={link.id} className='navbar__item'>
                <a href={`/#${link.href}`} className='navbar__link' onClick={handleShowLinks}>{link.title}</a>
            </li>
        );    
    });

    return (
        <nav className="navbar">
            <div className="navbar-mobile">
                <div className="navbar-mobile__container">                                 
                    <MainLogo visible={showLinks}/>
                    <MenuBurger visible={showLinks} handleShow={handleShowLinks}/>
                </div>
            </div>
            <div className={`navbar__container ${showLinks ? "show-nav" : "hide-nav"}`}>
                <ul className='navbar__links'>
                    {menuLinks}
                    <BtnResume handleShow={handleShowLinks}/>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
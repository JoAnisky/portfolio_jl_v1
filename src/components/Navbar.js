import React from 'react';
import Logo from './MainLogo';
import MenuBurger from './MenuBurger';
import BtnResume from './BtnResume';
import { useState } from 'react';

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <nav className="navbar">
            <MenuBurger handleShow={handleShowLinks}/>
            <Logo/>
            <div className={`navbar__container ${showLinks ? "show-nav" : "hide-nav"}`}>
                <ul className='navbar__links'>
                    <li className='navbar__item'>
                        <a href="/#about" className='navbar__link'>A propos</a>
                    </li>
                    <li className='navbar__item'>
                        <a href="/#knowledges" className='navbar__link'>Compétences</a>
                    </li>                
                    <li className='navbar__item'>
                        <a href="/#portfolio" className='navbar__link'>Portfolio</a>
                    </li>
                    <li className='navbar__item'>
                        <a href="/#contact" className='navbar__link'>Contact</a>
                    </li>
                </ul>
                <BtnResume/>

            </div>

        </nav>
    );
};

export default Navbar;
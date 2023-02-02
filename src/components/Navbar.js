import React from 'react';
import Logo from './MainLogo';
import MenuBurger from './MenuBurger';
import BtnResume from './BtnResume';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Logo/>
            <div className='navbar__container'>
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
                <MenuBurger/>
                <BtnResume/>
            </div>

        </nav>
    );
};

export default Navbar;
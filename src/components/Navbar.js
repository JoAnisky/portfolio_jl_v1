import React from 'react';
import Logo from './MainLogo';
import MenuBurger from './MenuBurger';
import BtnResume from './BtnResume';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Logo/>
            <div className='nav-menu'>
                <ul className='nav-menu__links'>
                    <li className='nav-menu_item'>
                        <a href="/#about" className='header-nav__link'>A propos</a>
                    </li>
                    <li className='nav-menu__item'>
                        <a href="/#knowledges" className='header-nav__link'>Compétences</a>
                    </li>                
                    <li className='nav-menu__item'>
                        <a href="/#portfolio" className='header-nav__link'>Portfolio</a>
                    </li>
                    <li className='nav-menu__item'>
                        <a href="/#about" className='header-nav__link'>Contact</a>
                    </li>
                </ul>
                <MenuBurger/>
                <BtnResume/>
            </div>

        </nav>
    );
};

export default Navbar;
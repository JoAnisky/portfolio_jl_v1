import React from 'react';
import Logo from '../../../components/MainLogo';
import MenuTop from "../../../components/MenuTop";
import BtnResume from './BtnResume';

// import HomeParallax from './HomeParallax';

const Header = () => {
    return (
        <header className='header-nav'>
            <nav className="header-nav__navbar">
                <Logo/>
                <div className='header-nav__menu'>
                    <MenuTop/>
                    <BtnResume/>
                </div>
            </nav>
                     
        </header>
    );
}

export default Header;
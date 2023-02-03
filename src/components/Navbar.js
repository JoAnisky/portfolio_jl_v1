import React from 'react';
import MainLogo from './MainLogo';
import MenuBurger from './MenuBurger';
import BtnResume from './BtnResume';
import { useState } from 'react';

const Navbar = () => {

    const [links, setLinks] = useState([
        {id:1, href:"about", title:"A propos"},
        {id:2, href:"knowledges", title:"Compétences"},
        {id:3, href:"portfolio", title:"Portfolio"},
        {id:4, href:"portfolio", title:"Contact"}
    ])

    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    const menuLinks = links.map(link => {
        return(
            <li key={link.id} className='navbar__item'>
                <a href={`/#${link.href}`} className='navbar__link' onClick={handleShowLinks}>{link.title}</a>
            </li>
        )
        
    })
        
    console.log(links)
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
                    {/* <li className='navbar__item'>
                        <a href="/#about" className='navbar__link' onClick={handleShowLinks}>A propos</a>
                    </li>
                    <li className='navbar__item'>
                        <a href="/#knowledges" className='navbar__link' onClick={handleShowLinks}>Compétences</a>
                    </li>                
                    <li className='navbar__item'>
                        <a href="/#portfolio" className='navbar__link' onClick={handleShowLinks}>Portfolio</a>
                    </li>
                    <li className='navbar__item'>
                        <a href="/#contact" className='navbar__link' onClick={handleShowLinks}>Contact</a>
                    </li> */}
                    <BtnResume handleShow={handleShowLinks}/>
                </ul>

            </div>

        </nav>
    );
};

export default Navbar;
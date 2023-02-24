import { HashLink } from 'react-router-hash-link';
import MenuSocials from '../components/MenuSocials';
const footerMenuLinks = [{name:"Mentions légales", url:"legals/#top"},{name:"Sitemap", url:"sitemap"}];

const Footer = () => {
    return (
        <>
            <footer>
            <MenuSocials/>
                <div>
                    <div className='menu-footer'>
                        <ul className='menu-footer__links'>
                            {footerMenuLinks.map((link, index) => <li key={index}><HashLink to={link.url} className="green-texts">{link.name}</HashLink></li>)}
                        </ul>
                    </div>

                    <div className='copyright'>
                        <p>Design & développement &copy; Jonathan Loré (JoAnisky) <span>{(new Date().getFullYear())}</span></p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;

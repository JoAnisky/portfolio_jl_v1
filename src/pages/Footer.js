import { HashLink } from 'react-router-hash-link';
import MenuSocials from '../components/MenuSocials';
const footerMenuLinks = [{name:"Mentions légales", url:"legals/#top"},{name:"Sitemap", url:"sitemap"}];

const Footer = () => {
    return (
        <>
            <footer>
            <MenuSocials/>
                <div>
                    <ul className='menu-footer'>
                        {footerMenuLinks.map((link, index) => <li key={index}><HashLink to={link.url} className="green-texts">{link.name}</HashLink></li>)}
                    </ul>
                    <div className='copyright'>
                        <p>Design & développement &copy; Jonathan Loré (JoAnisky) <span>{(new Date().getFullYear())}</span></p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;

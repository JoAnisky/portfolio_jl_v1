import { Link } from 'react-router-dom';
import MenuSocials from '../components/MenuSocials';
const footerMenuLinks = [{name:"Mentions légales", url:"legals"},{name:"Sitemap", url:"/sitemap"}];

const Footer = () => {
    return (
        <>
            <footer>
            <MenuSocials/>
                <div>
                    <p>Design & développement &copy; Jonathan Loré (JoAnisky) <span>{(new Date().getFullYear())}</span></p>
                </div>
                <div>
                    <ul>
                        {footerMenuLinks.map((link, index) => <li key={index}><Link to={link.url}>{link.name}</Link></li>)}
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Footer;

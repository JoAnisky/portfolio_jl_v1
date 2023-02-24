import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import menuList from '../data/menuLinksList.json';
import Header from './Home/Header';

const Sitemap = () => {
    const menuLinks = menuList.map(link => {
        return(
            <li key={link.id}>
                <HashLink smooth to={`/#${link.href}`}>{link.title}</HashLink>
            </li>
        );
    });

  return (
  <>
    <Header/>
    <div className="sitemap">
        <div className="sitemap__heading">
            <h1>Plan du site</h1>
        </div>
        <div className="sitemap__list">
            <ul>
                <li><Link to="/">Accueil</Link></li>
                {menuLinks}
                <li><Link to="/legals">Mentions légales</Link></li>
                <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
        </div>
    </div>
  </>
  )
}
export default Sitemap;
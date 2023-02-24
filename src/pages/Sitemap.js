import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import menuList from '../data/menuLinksList.json';

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
      <div className="sitemap">
            <h1>Plan du site</h1>
            <ul className="Sitemap-List">
                <li><Link to="/">Home</Link></li>
                {menuLinks}
                <li><Link to="/legals">Mentions légales</Link></li>
                <li><Link to="/sitemap">Plan du site</Link></li>
            </ul>
        </div>
  </>
  )
}
export default Sitemap;
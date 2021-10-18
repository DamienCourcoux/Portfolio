// == Import
import { slide as Menu } from 'react-burger-menu';
import Logo from 'src/assets/img/logo.png';
import './header.scss';

// const showSettings = (event) => {
//   event.preventDefault();
// };

// == Composant
const Header = () => (
  <header className="header">
    <a href="/" title="Damien Courcoux"><img className="header__logo" src={Logo} alt="logo du site portfolio" /></a>
    <Menu right width="100%" title="Menu">
      <a href="/" title="Damien Courcoux"><img className="header__logo" src={Logo} alt="logo du site portfolio" /></a>
      <a id="home" className="menu-item" href="/" title="Accueil">Accueil</a>
      <a id="project" className="menu-item" href="/about" title="Mes projets">Mes projets</a>
      <a id="cv" className="menu-item" href="/contact" title="Mon CV">Mon CV</a>
    </Menu>
  </header>
);

// == Export
export default Header;

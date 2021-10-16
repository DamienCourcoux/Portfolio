// == Import

import Logo from 'src/assets/img/logo.png';
import { FaBars } from 'react-icons/fa';
import './header.scss';

// == Composant
const Header = () => (
  <header className="header">
    <a href="/" title="Damien Courcoux"><img className="header__logo" src={Logo} alt="logo du site portfolio" /></a>
    <span className="header__menu" title="Menu"><FaBars /></span>
  </header>
);

// == Export
export default Header;

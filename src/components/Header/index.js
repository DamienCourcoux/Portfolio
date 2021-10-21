// == Import
import { slide as Menu } from 'react-burger-menu';
import { useDispatch, useSelector } from 'react-redux';
import { createOpenOrNotMenuAction, createCloseMenuAction } from 'src/store/action';
import { NavLink } from 'react-router-dom';

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';
import Logo from 'src/assets/img/logo.png';
import './header.scss';

// == Composant
const Header = () => {
  const isOpen = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();

  const handleIsOpen = () => {
    dispatch(createOpenOrNotMenuAction());
  };

  const closeMenu = () => {
    dispatch(createCloseMenuAction());
  };

  return (
    <header className="header">
      <a href="/" title="Damien Courcoux"><img className="header__logo" src={Logo} alt="logo du site portfolio" /></a>
      <Menu
        right
        width="100%"
        title="Menu"
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
      >
        <div>
          <NavLink
            to="/"
            title="Damien Courcoux"
            onClick={closeMenu}
          >
            <img className="header__logo" src={Logo} alt="logo du site portfolio" />
          </NavLink>
          <NavLink
            to="/"
            title="Accueil"
            onClick={closeMenu}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/mesprojets"
            title="Mes projets"
            onClick={closeMenu}
          >
            Mes projets
          </NavLink>
          <NavLink
            to="/moncv"
            title="Mon CV"
            onClick={closeMenu}
          >
            Mon CV
          </NavLink>
        </div>
        <footer className="header__footer">
          <div className="header__footer--copyright">
            <img src={Logo} alt="logo du site" />
            <p>Damien Courcoux © 2021</p>
          </div>
          <ul className="header__footer--reseaux">
            <li>
              <a href="https://www.linkedin.com/in/damiencourcoux/" title="Mon Linkedin" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/DamienCourcoux" title="Mon GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="mailto:damsmailspro@gmail.com" title="Prendre contact" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </footer>
      </Menu>
    </header>
  );
};

// == Export
export default Header;

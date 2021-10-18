// == Import
import { slide as Menu } from 'react-burger-menu';
import { useDispatch, useSelector } from 'react-redux';
import { createOpenOrNotMenuAction, createCloseMenuAction } from 'src/store/action';
import { NavLink } from 'react-router-dom';

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
      </Menu>
    </header>
  );
};

// == Export
export default Header;

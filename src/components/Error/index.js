// == Import
import { NavLink } from 'react-router-dom';

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';
import Cloud1 from 'src/assets/img/cloud1.png';
import Cloud2 from 'src/assets/img/cloud2.png';
import Logo from 'src/assets/img/logo.png';

import './error.scss';

// == Composant
const Error = () => (
  <div className="error">
    <div className="error__404">
      <img className="home__cloud cloud1" src={Cloud1} alt="img d'un nuage pour faire de la déco sur la section home" />
      <img className="home__cloud cloud2" src={Cloud2} alt="img d'un nuage pour faire de la déco sur la section home" />
      <img className="home__cloud cloud3" src={Cloud1} alt="img d'un nuage pour faire de la déco sur la section home" />
      <img className="home__cloud cloud4" src={Cloud2} alt="img d'un nuage pour faire de la déco sur la section home" />
      <img className="home__cloud cloud5" src={Cloud2} alt="img d'un nuage pour faire de la déco sur la section home" />
      <img className="home__cloud cloud6" src={Cloud1} alt="img d'un nuage pour faire de la déco sur la section home" />
      <img className="home__cloud cloud7" src={Logo} alt="img d'un nuage pour faire de la déco sur la section home" />
      <h1 className="error__404--title">404</h1>
      <p className="error__404--subtitle">On dirait que tu as la tête dans les nuages</p>
      <NavLink
        to="/"
        title="Accueil"
        className="error__404--button"
      >
        Redescendre
      </NavLink>
    </div>
    <footer className="error__footer">
      <div className="error__footer--copyright">
        <img src={Logo} alt="logo du site" />
        <p>Damien Courcoux © 2021</p>
      </div>
      <ul className="error__footer--reseaux">
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
  </div>
);

// == Export
export default Error;

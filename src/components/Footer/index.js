// == Import
import { Link } from 'react-router-dom';

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';

import Logo from 'src/assets/img/logo.png';
import './footer.scss';

// == Composant
const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      <Link to="/"><img src={Logo} alt="logo du site" /></Link>
      <Link to="/">Damien Courcoux © 2021</Link>
    </div>
    <ul className="footer__reseaux">
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
);

// == Export
export default Footer;

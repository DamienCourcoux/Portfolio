// == Import
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';
import Logo from 'src/assets/img/logo.png';
import './footer.scss';

// == Composant
const Footer = () => (
  <section className="footer">
    <div className="footer__copyright">
      <img src={Logo} alt="logo du site" />
      <p>Damien Courcoux © 2021</p>
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
  </section>
);

// == Export
export default Footer;

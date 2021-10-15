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
        <a href="/" title="Mon Linkedin">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="/" title="Mon GitHub">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="/" title="Me contacter">
          <FaEnvelope />
        </a>
      </li>
    </ul>
  </section>
);

// == Export
export default Footer;

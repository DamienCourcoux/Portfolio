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
import Men from 'src/assets/img/men.png';
import Wave from 'src/assets/img/wave.svg';
import './home.scss';

// == Composant
const Home = () => (
  <section className="home">
    <img className="home__cloud cloud1" src={Cloud1} alt="img d'un nuage pour faire de la déco sur la section home" />
    <img className="home__cloud cloud2" src={Cloud2} alt="img d'un nuage pour faire de la déco sur la section home" />
    <img className="home__cloud cloud3" src={Cloud1} alt="img d'un nuage pour faire de la déco sur la section home" />
    <img className="home__cloud cloud4" src={Cloud2} alt="img d'un nuage pour faire de la déco sur la section home" />
    <img className="home__cloud cloud5" src={Cloud2} alt="img d'un nuage pour faire de la déco sur la section home" />
    <img className="home__cloud cloud6" src={Cloud1} alt="img d'un nuage pour faire de la déco sur la section home" />
    <img className="home__cloud cloud7" src={Logo} alt="img d'un nuage pour faire de la déco sur la section home" />
    <div className="home__profil">
      <h1 className="home__profil--title">Damien <br /> Courcoux</h1>
      <p className="home__profil--subtitle">Développeur Web Frontend</p>
      <ul className="home__profil--reseaux">
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
      <div className="home__profil--buttons">
        <NavLink exact className="home__profil--buttons--button projets" to="/mesprojets" title="Mes projets">Mes projets</NavLink>
        <NavLink exact className="home__profil--buttons--button cv" to="/moncv" title="Mon CV">Mon CV</NavLink>
      </div>
    </div>
    <img className="home__men" src={Men} alt="illustration d'un homme (décorative)" />
    <img className="home__wave" src={Wave} alt="illustration d'un wave (décorative)" />
  </section>
);

// == Export
export default Home;

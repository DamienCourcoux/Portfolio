// == Import
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';
import Cloud from 'src/assets/img/logo.png';
import Men from 'src/assets/img/men.png';
import Wave from 'src/assets/img/wave.svg';
import './home.scss';

// == Composant
const Home = () => (
  <section className="home">
    <img className="home__cloud cloud1" src={Cloud} alt="img d'un nuage pour faire de la déco sur la section home" />
    <img className="home__cloud cloud2" src={Cloud} alt="img d'un nuage pour faire de la déco sur la section home" />
    <img className="home__cloud cloud3" src={Cloud} alt="img d'un nuage pour faire de la déco sur la section home" />
    <div className="home__profil">
      <h1 className="home__profil--title">Damien <br /> Courcoux</h1>
      <p className="home__profil--subtitle">Développeur Web Frontend</p>
      <ul className="home__profil--reseaux">
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
      <div className="home__profil--buttons">
        <button className="home__profil--buttons--button projets" type="button" title="Mes projets">Mes projets</button>
        <button className="home__profil--buttons--button cv" type="button" title="Mes CV">Mon CV</button>
      </div>
    </div>
    <img className="home__men" src={Men} alt="illustration d'un homme (décorative)" />
    <img className="home__wave" src={Wave} alt="illustration d'un wave (décorative)" />
  </section>
);

// == Export
export default Home;

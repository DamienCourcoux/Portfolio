// == Import
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
} from 'react-icons/fa';

import Cloud1 from 'src/assets/img/cloud1.png';
import Cloud2 from 'src/assets/img/cloud2.png';
import Logo from 'src/assets/img/logo.png';
import CvPdf from 'src/assets/img/CV_Courcoux_Damien.pdf';
import CvPng from 'src/assets/img/CV_Courcoux_Damien.png';

import './cv.scss';

// == Composant
const Cv = () => (
  <section className="cv">
    <div className="cv__headband">
      <img className="cv__headband--cloud cloud1" src={Cloud1} alt="img d'un nuage pour faire de la déco sur la section home" />
      <img className="cv__headband--cloud cloud2" src={Cloud2} alt="img d'un nuage pour faire de la déco sur la section home" />
      <img className="cv__headband--cloud cloud3" src={Cloud1} alt="img d'un nuage pour faire de la déco sur la section home" />
      <img className="cv__headband--cloud cloud7" src={Logo} alt="img d'un nuage pour faire de la déco sur la section home" />
      <h1 className="cv__headband--title">Mon cv</h1>
    </div>
    <div className="cv__container">
      <h2>Mon CV <a href={CvPdf} download="CV_Courcoux_Damien.pdf">(télécharger en pdf <FaDownload />)</a></h2>
      <img src={CvPng} alt="img de mon cv" />
    </div>
    <footer className="cv__footer">
      <div className="cv__footer--copyright">
        <img src={Logo} alt="logo du site" />
        <p>Damien Courcoux © 2021</p>
      </div>
      <ul className="cv__footer--reseaux">
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
  </section>
);

// == Export
export default Cv;

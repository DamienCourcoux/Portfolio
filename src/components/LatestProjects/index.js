// == Import
import { NavLink } from 'react-router-dom';

import Cloud2 from 'src/assets/img/cloud2.png';
import './latestProjects.scss';

// == Composant
const LatestProjects = () => (
  <section className="latestProjects">
    <img className="latestProjects__cloud cloud2" src={Cloud2} alt="img d'un nuage pour faire de la déco sur la section home" />
    <div className="latestProjects__container">
      <h1 className="latestProjects__container--title">Mes derniers projets</h1>
      <p className="latestProjects__container--subtitle"><em>importer par l'api GitHub</em></p>
      <div className="latestProjects__container--buttons">
        <a href="/" title="Mon dernier projet">Mon dernier projet</a>
        <a href="/" title="Mon avant dernier projet">Mon avant dernier projet</a>
        <NavLink exact to="/mesprojets" title="Voir tout les projets">Voir tout les projets</NavLink>
      </div>
    </div>
  </section>
);

// == Export
export default LatestProjects;

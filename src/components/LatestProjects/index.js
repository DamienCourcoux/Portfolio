// == Import
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
        <button type="button">Mon dernier projet</button>
        <button type="button">Coding Bootcamp Testimonials Slider</button>
        <button type="button">Voir tout les projets</button>
      </div>
    </div>
  </section>
);

// == Export
export default LatestProjects;

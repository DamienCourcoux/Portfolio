// == Import
import './latestProjects.scss';

// == Composant
const LatestProjects = () => (
  <section className="latestProjects">
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

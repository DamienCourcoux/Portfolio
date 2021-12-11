// == Import
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Cloud2 from 'src/assets/img/cloud2.png';
import './latestProjects.scss';

// == Composant
const LatestProjects = () => {
  const projects = useSelector((state) => state.projects);
  const hasError = useSelector((state) => state.hasError);

  return (
    <section className="latestProjects">
      <img className="latestProjects__cloud cloud2" src={Cloud2} alt="img d'un nuage pour faire de la déco sur la section home" />
      <div className="latestProjects__container">
        <h1 className="latestProjects__container--title">Mes derniers projets</h1>
        <p className="latestProjects__container--subtitle"><em>{hasError ? 'Aucun projet en public' : 'importés par l\'api GitHub'}</em></p>
        <div className="latestProjects__container--buttons">
          {
            hasError ? ''
              : projects.map((project) => (
                <a key={project.id} href={project.clone_url} title={project.name} target="_blank" rel="noopener noreferrer">{project.name}</a>
              ))
          }
          {
            hasError ? ''
              : <NavLink exact to="/mesprojets" title="Voir tous les projets">Voir tous les projets</NavLink>
          }
        </div>
      </div>
    </section>
  );
};

// == Export
export default LatestProjects;

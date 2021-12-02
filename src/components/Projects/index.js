// == Import
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaGlobe,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiSass,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiSemanticuireact,
  SiMaterialui,
  SiBulma,
  SiNextdotjs,
  SiGatsby,
  SiTypescript,
  SiFrontendmentor,
} from 'react-icons/si';

import Cloud1 from 'src/assets/img/cloud1.png';
import Cloud2 from 'src/assets/img/cloud2.png';
import Logo from 'src/assets/img/logo.png';

import { GET_ALL_PROJECTS } from 'src/store/action';

import './projects.scss';

// == Composant
const Projects = () => {
  const projects = useSelector((state) => state.allProjects);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_ALL_PROJECTS });
  }, []);

  return (
    <section className="projects">
      <div className="projects__headband">
        <img className="projects__headband--cloud cloud1" src={Cloud1} alt="img d'un nuage pour faire de la déco sur la section home" />
        <img className="projects__headband--cloud cloud2" src={Cloud2} alt="img d'un nuage pour faire de la déco sur la section home" />
        <img className="projects__headband--cloud cloud3" src={Cloud1} alt="img d'un nuage pour faire de la déco sur la section home" />
        <img className="projects__headband--cloud cloud7" src={Logo} alt="img d'un nuage pour faire de la déco sur la section home" />
        <h1 className="projects__headband--title">Mes projets</h1>
        <p className="projects__headband--subtitle"><em>importer par l'api GitHub</em></p>
      </div>
      <div className="projects__card">
        {
          projects.map((project) => (
            <div key={project.id} className="projects__card--project" href={project.clone_url} title={project.name} target="_blank" rel="noopener noreferrer">
              <h1>{project.name}</h1>
              {
                project.topics.map((topic) => {
                  if (topic === 'frontend-mentor') {
                    return <em key={topic} className="frontendMentor">Projet trouvé sur <a href="https://www.frontendmentor.io/challenges" title="Frontend Mentor" target="_blank" rel="noopener noreferrer"><SiFrontendmentor className="icon-frontendMentor" /> <span>Frontend</span> Mentor</a></em>;
                  }
                  return '';
                })
              }
              <p>{project.description}</p>
              <ul className="projects__card--project--languages">
                {
                  project.topics.map((topic) => {
                    switch (topic) {
                      case 'html5': {
                        return <SiHtml5 key={topic} className="icon html" title="Html5" />;
                      }
                      case 'css3': {
                        return <SiCss3 key={topic} className="icon css" title="Css3" />;
                      }
                      case 'javascript': {
                        return <SiJavascript key={topic} className="icon javascript" title="JavaScript" />;
                      }
                      case 'react': {
                        return <SiReact key={topic} className="icon react" title="React" />;
                      }
                      case 'redux': {
                        return <SiRedux key={topic} className="icon redux" title="Redux" />;
                      }
                      case 'scss': {
                        return <SiSass key={topic} className="icon scss" title="Scss" />;
                      }
                      case 'nodejs': {
                        return <SiNodedotjs key={topic} className="icon nodejs" title="NodeJS" />;
                      }
                      case 'mysql': {
                        return <SiMysql key={topic} className="icon mysql" title="MySql" />;
                      }
                      case 'postgresql': {
                        return <SiPostgresql key={topic} className="icon postgresql" title="Postgresql" />;
                      }
                      case 'mongodb': {
                        return <SiMongodb key={topic} className="icon mongodb" title="Mongodb" />;
                      }
                      case 'graphql': {
                        return <SiGraphql key={topic} className="icon graphql" title="Graphql" />;
                      }
                      case 'semantic-ui-react': {
                        return <SiSemanticuireact key={topic} className="icon semanticuireact" title="Semantic Ui React" />;
                      }
                      case 'material-ui': {
                        return <SiMaterialui key={topic} className="icon materialui" title="Material Ui" />;
                      }
                      case 'bulma': {
                        return <SiBulma key={topic} className="icon bulma" title="Bulma" />;
                      }
                      case 'nextjs': {
                        return <SiNextdotjs key={topic} className="icon nextjs" title="NextJS" />;
                      }
                      case 'gatsby': {
                        return <SiGatsby key={topic} className="icon gatsby" title="Gatsby" />;
                      }
                      case 'typescript': {
                        return <SiTypescript key={topic} className="icon typescript" title="TypeScript" />;
                      }
                      default:
                        break;
                    }
                    return '';
                  })
                }
              </ul>
              <ul className="projects__card--project--share">
                <li>
                  <a href={project.html_url} title={project.name} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  {
                    project.homepage === 'https://www.myprofile.me' || project.homepage === null || project.homepage === ''
                      ? ''
                      : (
                        <a href={project.homepage} title="Voir le projet" target="_blank" rel="noopener noreferrer">
                          <FaGlobe />
                        </a>
                      )
                  }
                </li>
              </ul>
            </div>
          ))
        }
      </div>
      <footer className="projects__footer">
        <div className="projects__footer--copyright">
          <img src={Logo} alt="logo du site" />
          <p>Damien Courcoux © 2021</p>
        </div>
        <ul className="projects__footer--reseaux">
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
};

// == Export
export default Projects;

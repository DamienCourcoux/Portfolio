// == Import
import Typical from 'react-typical';

import Cloud1 from 'src/assets/img/cloud1.png';
import Cloud2 from 'src/assets/img/cloud2.png';
import './about.scss';

// == Composant
const About = () => (
  <section className="about">
    <img className="about__cloud cloud1" src={Cloud1} alt="img d'un nuage pour faire de la déco sur la section about" />
    <img className="about__cloud cloud2" src={Cloud2} alt="img d'un nuage pour faire de la déco sur la section home" />
    <h1 className="about__title">
      <Typical
        steps={['Salut', 1000, 'Salut, moi c\'est John Doe', 2000, 'Salut, moi c\'est euh...', 1000, 'Salut, moi c\'est Damien', 3000]}
        loop={Infinity}
        wrapper="p"
      />
    </h1>
    <div className="about__container">
      <p className="about__container--paragraph paragraph1">
        Suite à de nombreuses expériences qui ne me satisfaisait pas,
        j'ai voulu me réorienter vers ma passion le numérique !
      </p>
      <p className="about__container--paragraph paragraph2">
        Avec une première formation j'ai pu mettre un pied dans le monde du Web.
        J'y ai pu apprendre des compétences,
        qui m'ont permis de travailler en tant que Freelance.
      </p>
      <p className="about__container--paragraph paragraph3">
        Travailler seul c'est bien, à plusieurs c'est mieux.
        C'est pourquoi, aujourd'hui j'ai envie de voir d'autre horizon.
      </p>
      <p className="about__container--paragraph paragraph4">
        Pour cela j'ai voulu monter en compétence,
        avec une deuxième formation réalisées en télétravail avec O'clock.
        J'y ai pu me spécialiser en Frontend !
      </p>
      <p className="about__container--paragraph paragraph5">Aujourd'hui je suis prêt à continuer mon expérience à vos côtés !!</p>
      <p className="about__container--paragraph paragraph6">Pour en apprendre plus, regardez <a href="/" title="Mon CV">mon cv</a>.</p>
    </div>
  </section>
);

// == Export
export default About;

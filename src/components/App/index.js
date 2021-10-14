// == Import
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import About from 'src/components/About';
import LatestProjects from 'src/components/LatestProjects';
import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Home />
    <About />
    <LatestProjects />
    <Contact />
    <Footer />
  </div>
);

// == Export
export default App;

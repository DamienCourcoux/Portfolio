// == Import
import { Switch, Route } from 'react-router-dom';

import Header from 'src/components/Header';
import Home from 'src/components/Home';
import About from 'src/components/About';
import LatestProjects from 'src/components/LatestProjects';
import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
        <About />
        <LatestProjects />
        <Contact />
        <Footer />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;

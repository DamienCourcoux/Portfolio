// == Import
import { Switch, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Header from 'src/components/Header';
import Home from 'src/components/Home';
import About from 'src/components/About';
import LatestProjects from 'src/components/LatestProjects';
import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';
import Projects from 'src/components/Projects';
import Cv from 'src/components/Cv';

import { GET_PROJECTS } from 'src/store/action';

import './styles.scss';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_PROJECTS });
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
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
        <Route exact path="/mesprojets">
          <Projects />
        </Route>
        <Route exact path="/moncv">
          <Cv />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
};

// == Export
export default App;

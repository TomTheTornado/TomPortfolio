import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
import PageNotFound from './components/404';
import {HashRouter, Route, Switch} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/TomPortfolio">
            <HomePage/>
          </Route>
          <Route exact path="/TomPortfolio/resume">
            <Resume/>
          </Route>
          <Route exact path="/TomPortfolio/gallery">
            <Gallery/>
          </Route>
          <Route exact path="/TomPortfolio/projects">
            <Projects/>
          </Route>
          <Route exact path="/TomPortfolio/contact">
            <Contact/>
          </Route>
          <PageNotFound/>
        </Switch>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;

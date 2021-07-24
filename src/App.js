import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
import PageNotFound from './components/404';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/TomPortfolio">
            <HomePage/>
          </Route>
          <Route path="/TomPortfolio/resume">
            <Resume/>
          </Route>
          <Route path="/TomPortfolio/gallery">
            <Gallery/>
          </Route>
          <Route path="/TomPortfolio/projects">
            <Projects/>
          </Route>
          <Route path="/TomPortfolio/contact">
            <Contact/>
          </Route>
          <PageNotFound/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
import PageNotFound from './components/404';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
          <Route exact path="/gallery">
            <Gallery/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/contact">
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

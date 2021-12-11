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
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/gallery" component={Gallery}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/contact" component={Contact}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
      <Footer/>
    </HashRouter>
  );
}

export default App;

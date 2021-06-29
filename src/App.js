import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import NavBar from './components/navBar';
import Home from './pages/Home'
import Team from './pages/Team'
import About from './pages/About'
import Recruiting from './pages/Recruiting'
import PlayerBio from './pages/PlayerBio'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/player/:name">
            <PlayerBio />
          </Route>
          <Route path="/Team">
            <Team />
          </Route>
          <Route path="/Recruiting">
            <Recruiting />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;

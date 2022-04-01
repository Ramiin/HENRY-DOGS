import React from 'react'
import './Global.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home'
import Details from './components/Details';
import Create from './components/Create';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>

            <Route path = "/">
              <Nav />
            </Route>
      </Switch>

            <Route exact path = '/home'>
              <Home />              
            </Route>

            <Route exact path ='/details'>
              <Details />
            </Route>

            <Route exact path='/create'>
              <Create />
            </Route>
        
    </div>

  );
}

export default App;

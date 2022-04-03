import React from 'react'
import './Global.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home'
import Details from './components/Details';
import Create from './components/Create';
import Nav from './components/Nav';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>

            <Route path = "/">
              <Header />
              <Nav />
            </Route>
      </Switch>

            <Route exact path = '/home'>
              <Home />              
            </Route>

            <Route exact path ='/details/:id'>
              <Details />
            </Route>

            <Route exact path='/create'>
              <Create />
            </Route>
        
    </React.Fragment>

  );
}

export default App;

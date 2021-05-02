import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/navBar/navBar';
import Main from './pages/main/main';
import Favorites from './pages/favorites';


function App() {

  return (
    <Router>
      <div >
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="favorites">
            <Favorites />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from './pages/main/main';
import Favorites from './pages/favorites/favorites';
import NavBar from './components/navBar/navBar';


function App() {

  return (
    <Router>
      <div >
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

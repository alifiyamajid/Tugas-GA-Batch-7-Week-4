import React from 'react';
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { HomePages } from './pages/homepages';
import { EditPages } from './pages/editpages';
import { AppPages } from './pages/apppages';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="">
          <Switch>
            <Route exact path="/" >
              <HomePages />
            </Route>
            <Route path="/add">
              <AppPages />
            </Route>
            <Route path="/edit">
              <EditPages />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

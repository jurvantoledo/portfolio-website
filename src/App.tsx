import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
    </div>
  );
}

export default App;

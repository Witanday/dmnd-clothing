import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Homepage  from "./pages/homepage/homepage.component" 

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path='/' component={Homepage} />
    </Switch>
     <Homepage />
    </div>
  );
}

export default App;

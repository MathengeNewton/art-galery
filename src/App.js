import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Landingpage from './components/landingpage/landingpage'
import './App.css';

function App() {
  
  return (
    <div className="App">      
      <Router>
        <Switch>
          <Route path="/" exact component={Landingpage} />
        </Switch>
      </Router>     
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Switch, Route } from 'react-router-dom';
import Keg from './components/Keg'

function App() {
  return (
    <div>

      <Switch>

          <Route exact path='/' component={Header} />
             <Route path='/kegs' component={Keg} />
      </Switch>
      <Keg/>

    </div>
  );
}

export default App;

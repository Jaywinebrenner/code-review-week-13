import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Switch, Route } from 'react-router-dom';
import Keg from './components/Keg'
import KegList from './components/KegList';
import About from './components/About'

function App() {
  return (
    <div>
    <Header/>

      <Switch>

             <Route path='/kegs' component={KegList} />
             <Route path='/about' component={About} />

      </Switch>


    </div>
  );
}

export default App;

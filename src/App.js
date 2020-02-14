import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Switch, Route } from 'react-router-dom';
import Keg from './components/Keg'
import KegList from './components/KegList'

function App() {
  return (
    <div>
    <Header/>
    <KegList/>
      <Switch>


             <Route path='/kegs' component={KegList} />
      </Switch>


    </div>
  );
}

export default App;

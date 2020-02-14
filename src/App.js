import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>

      <Switch>
        <Header/>
          <Route exact path='/' component={Header} />
             <Route path='/newbody' component={Body} />
      </Switch>
    </div>
  );
}

export default App;

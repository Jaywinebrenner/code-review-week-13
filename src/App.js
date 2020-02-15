import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Switch, Route } from 'react-router-dom';
import Keg from './components/Keg'
import KegList from './components/KegList';
import About from './components/About';
import NavigationBar from './components/NavigationBar';
import Error404 from './components/Error404';
import NewKegForm from './components/NewKegForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
          <NavigationBar/>

      <Switch>

             <Route path='/kegs' component={KegList} />
             <Route path='/about' component={About} />
             <Route path='/newkegform' component={NewKegForm} />
             <Route component={Error404} />

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

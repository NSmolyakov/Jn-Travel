import React from 'react';
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import PageNotFound from './components/404/404'
import { Route,Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Switch>
          <Route exact path='/' render={Home}  />
          <Route path='/home' render={Home} />
          <Route path="*" render={PageNotFound} />    
      </Switch>
     
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route } from 'react-router-dom';

const App = () =>{
  return (
    <div className="App">
      <BrowserRouter>
      <Header />

      <Route exact path='/'
          render={ () => <Home />}  />


      <Route path='/home'
          render={ () => <Home />}  />

      
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

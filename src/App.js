import React, {lazy, Suspense} from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import { Route,Switch } from 'react-router-dom'


const PageNotFound = lazy(() => import('./components/404/404'));

const App = () => {
  return (
    <div className="App">
      <Header />

      <Suspense fallback={<div>Загрузка</div>}>
        <Switch>
            <Route exact path='/' render={Home}  />
            <Route path='/home' render={Home} />
            <Route path="*" component={PageNotFound} />    
        </Switch>
      </Suspense>
     
      <Footer />
    </div>
  );
}

export default App;

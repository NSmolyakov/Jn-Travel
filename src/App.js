import React, {lazy, Suspense} from 'react'
import './App.css'
import { Route,Switch } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Tours from './components/tours/Tours'


const PageNotFound = lazy(() => import('./components/404/404'));
const Services = lazy(() => import('./components/services/Services'));
const About = lazy(() => import('./components/about/About'));
const Hotels = lazy(() => import('./components/hotels/Hotels'));

const App = () => {
  return (
    <div className="App">
      <Header />

      <Suspense fallback={<div>Загрузка</div>}>
        <Switch>
            <Route exact path='/' render={Home}  />
            <Route path='/home' render={Home} />
            <Route path='/tours' render={Tours} />
            <Route path='/services' component={Services} />
            <Route path='/about' component={About} />
            <Route path='/hotels' component={Hotels} />
            <Route path="*" component={PageNotFound} />    
        </Switch>
      </Suspense>
     
      <Footer />
    </div>
  );
}

export default App;

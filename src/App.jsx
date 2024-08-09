import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './assets/components/Home';
import Connection from './assets/components/Connection';
import Contact from './assets/components/Contact';
import Manager from './assets/components/Manager';
import Services from './assets/components/Services';
import Products from './assets/components/Products';
import Cnc from './assets/components/Cnc';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/connection' Component={Connection}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/manager' Component={Manager}/>
          <Route path='/newest' Component={Services}/>
          <Route path='/products' Component={Products}/>
          <Route path='/cnc' Component={Cnc}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
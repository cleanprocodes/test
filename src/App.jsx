import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './assets/components/Home';
import Contact from './assets/components/Contact';
import Newest from './assets/components/Newest';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/newest' Component={Newest}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
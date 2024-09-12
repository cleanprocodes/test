import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './assets/components/Home';
import Contact from './assets/components/Contact';
import Newest from './assets/components/Newest';
import Educate from './assets/components/Educate';

function App({dataJson }) {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home dataJson={dataJson}/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newest' element={<Newest dataJson={dataJson} />} />
          <Route path='/educate' element={<Educate dataJson={dataJson} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './assets/components/Home';
import Contact from './assets/components/Contact';
import Newest from './assets/components/Newest';

function App({ content }) {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home content={content} />} />
          <Route path='/contact' element={<Contact content={content} />} />
          <Route path='/newest' element={<Newest content={content} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

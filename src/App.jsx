import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './assets/components/Home';
import Contact from './assets/components/Contact';
import Newest from './assets/components/Newest';
import Educate from './assets/components/Educate';

function App({ dataJson }) {
  const [isLoading, setIsLoading] = useState(false);
  const [Products, setProducts] = useState(dataJson || []);

  useEffect(() => {
    async function populateProductsData() {
      try {
        setIsLoading(true);
        const response = await fetch('https://localhost:7179/api/Category');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products: ', error);
      } finally {
        setIsLoading(false);
      }
    }

    if (!dataJson || dataJson.length === 0) {
      populateProductsData();
    }
  }, [dataJson]);


  if (isLoading) {
    return (
      <div className='loading'>
        <div className='loader'>لطفا کمی صبر نمایید...</div>
      </div>
    );
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home dataJson={Products} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newest' element={<Newest dataJson={Products} />} />
          <Route path='/educate' element={<Educate dataJson={Products} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

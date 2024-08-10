import React from 'react'
import Header from '../repeater/Header'
import Float from '../repeater/Float'
import ProductSection from './../repeater/ProductSection';
import ManagerSection from './../repeater/ManagerSection';
import ServicesSection from './../repeater/ServicesSection';
import ConnectionSection from './../repeater/ConnectionSection';
import Footer from '../repeater/Footer';



function Home() {
  return (
    <>
      <Header />
      <article className='relative'>
        <ProductSection />
        <ManagerSection />
        <ServicesSection />
        <ConnectionSection />
        <Float />
      </article>
      <Footer/>
    </>
  )
}

export default Home

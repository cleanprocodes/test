import React from 'react'
import Header from '../repeater/Header'
import Float from '../repeater/Float'
import ProductSection from './../repeater/ProductSection';



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
    </>
  )
}

export default Home


//manager-section
function ManagerSection() {
  return (
    <section id='manager'>
    </section>
  )
}

//services-section
function ServicesSection() {
  return (
    <section id='services'></section>
  )
}

//connection-section
function ConnectionSection() {
  return (
    <section id='connection'></section>
  )
}

import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Section from '../Section/Section1'
import Section2 from '../Section/Section2'
import Section3 from '../Section/Section3'
import Section4 from '../Section/Section4'

const Tezal = () => {
  return (
    <>
        <div className='container-fluid p-0'>
          <Header />
          <Section />
          <Section2 />
          <Section3 />
          <Section4 />
          <Footer />
        </div>
    </>
  )
}

export default Tezal
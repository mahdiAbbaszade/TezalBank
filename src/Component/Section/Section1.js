import React from 'react'
import Sliderkharidaghsati from '../../assest/Img/sliderkharidaghsati.webp'
import Sliderkharidaghsati2 from '../../assest/Img/vam/ghesti3.jpg'


const Section1 = () => {
  return (
    <>
      <div className='container-fluid text-center d-flex justify-content-center p-0'>
        <img className='SectionImg w-100 d-none d-md-block' src={Sliderkharidaghsati} alt='slider' />
        <img className='SectionImg2 w-100 d-block d-md-none d-lg-none' src={Sliderkharidaghsati2} alt='slider2' />
      </div>
    </>
  )
}

export default Section1
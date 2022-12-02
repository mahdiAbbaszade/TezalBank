import React from 'react'
import Tv from '../../assest/Img/tv2.jpg'
import mobl from '../../assest/Img/mobl.jpg'
import mobile1 from '../../assest/Img/mobile1.jpg'
import farsh from '../../assest/Img/farsh.jpg'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Section5 = () => {

  useEffect( () => {
    AOS.init();
    AOS.refresh();
  }, [] );

  return (
    <>
      <div className=' container-fluid p-0 my-5 pt-4 px-1'>
        <p className=' fw-bold text-center tezalP'>
          با تزال اقساطی خرید کن
        </p>
        <div className='d-flex flex-column d-md-flex flex-md-row flex-md-wrap pb-5'>
          <div data-aos="flip-right" data-aos-duration="200" className='col col-md-6 col-lg btnGest d-flex flex-column justify-content-center align-items-center rounded py-3 p-2'>
            <img className='gestImg rounded' src={Tv} alt='slide' />
            <button onClick={Sabt} className='btnGestC d-grid col-3 col-md-5 col-lg-6 fw-bold btn btn-danger'> تزآل </button>
          </div>
          <div data-aos="flip-right" data-aos-duration="500" className='col col-md-6 col-lg btnGest d-flex flex-column justify-content-center align-items-center rounded py-3 p-2'>
            <img className='gestImg rounded' src={mobl} alt='slide' />
            <button onClick={Sabt} className='btnGestC d-grid col-3 col-md-5 col-lg-6 fw-bold btn btn-danger'> تزآل </button>
          </div>
          <div data-aos="flip-right" data-aos-duration="800" className='col col-md-6 col-lg btnGest d-flex flex-column justify-content-center align-items-center rounded py-3 p-2'>
            <img className='gestImg rounded' src={mobile1} alt='slide' />
            <button onClick={Sabt} className='btnGestC d-grid col-3 col-md-5 col-lg-6 fw-bold btn btn-danger'> تزآل </button>
          </div>
          <div data-aos="flip-right" data-aos-duration="1100" className='col col-md-6 col-lg btnGest d-flex flex-column justify-content-center align-items-center rounded py-3 p-2'>
            <img className='gestImg rounded' src={farsh} alt='slide' />
            <button onClick={Sabt} className='btnGestC d-grid col-3 col-md-5 col-lg-6 fw-bold btn btn-danger'> تزآل </button>
          </div>
        </div>
        <div className='my-5 py-3 d-flex justify-content-center px-2 mx-1 mx-md-3 px-md-4'>
          <button onClick={Sabt} className='d-grid col-7 col-md-3 col-lg-3 btn btn-danger fw-bold mx-auto mt-3 py-3'> دیدن همه فروشگاه ها </button>
        </div>
      </div>
    </>
  )
}

function Sabt() {

  window.open( 'https://tezal.ir/user/shops', '_blank' );

  return null;
}


export default Section5
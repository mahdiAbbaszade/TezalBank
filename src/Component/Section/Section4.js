import React from 'react'
import Tv2 from '../../assest/Img/vam2/01.webp'
import mobl2 from '../../assest/Img/vam2/02.webp'
import mobile2 from '../../assest/Img/vam2/03.webp'
import farsh2 from '../../assest/Img/vam2/04.webp'
import spec2 from '../../assest/Img/vam2/05.webp'
import gold2 from '../../assest/Img/vam2/06.webp'
// import part2 from '../../assest/Img/vam2/08.jpg'
import part3 from '../../assest/Img/vam2/09.jpg'
// import part4 from '../../assest/Img/vam2/10.jpg'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'

const Section4 = () => {

  useEffect( () => {
    AOS.init();
    AOS.refresh();
  }, [] );


  return (
    <>
      <div className='container-fluid d-flex flex-column flex-md-column d-lg-flex flex-lg-row align-items-lg-center justify-content-between aling-items-center p-0 my-2 bg-light bg-opacity-100 py-3 px-3'>
        <div className=' bg-transparent d-flex flex-column d-md-flex flex-md-column flex-lg-column col-lg-3 align-items-center justify-content-center fw-bold text-center tezalP rounde'>
          <p className='m-0 d-none d-md-none d-lg-block py-3 PartP'>دسته بندی فروشگاه ها</p>
          <p className='bg-info w-100 py-3 d- justify-content-center d-lg-none'> دسته بندی فروشگاه ها </p>
          <img className='ImgPart d-none d-md-none d-lg-block img-fluid rounded' src={part3} alt="دسته بندی" />
        </div>
        <div className='col-lg-9 d-flex flex-column d-lg-flex flex-md-row justify-content-center justify-content-md-center flex-wrap flex-lg-nowrap overPart pb-1 px-4 px-md-1'>
          <ul className='UlList d-flex flex-column d-lg-flex flex-md-row justify-content-center justify-content-md-center flex-wrap flex-lg-nowrap pb-1 px-4 px-md-1'>
            <Link onClick={Sabt} className='col-12 col-md-6 col-lg-1 btnGestd d-flex justify-content-end justify-content-md-around rounded py-3 px-1 text-decoration-none' to="#">
              <div data-aos="flip-right" data-aos-duration="200" className=''>
                <img className='gestImg3 part rounded' src={Tv2} alt='slide' />
              </div>
            </Link>
            <Link onClick={Sabt} className='col-12 col-md-6 col-lg-1 btnGestd d-flex justify-content-start justify-content-md-around rounded py-3 p-2 text-decoration-none' to="#">
              <div data-aos="flip-right" data-aos-duration="500" className=''>
                <img className='gestImg3 part rounded' src={mobl2} alt='slide' />
              </div>
            </Link>
            <Link onClick={Sabt} className='col-12 col-md-6 col-lg-1 btnGestd d-flex justify-content-end justify-content-md-around rounded py-3 p-2 text-decoration-none' to="#">
              <div data-aos="flip-right" data-aos-duration="800" className=''>
                <img className='gestImg3 part rounded' src={mobile2} alt='slide' />
              </div>
            </Link>
            <Link onClick={Sabt} className='col-12 col-md-6 col-lg-1 btnGestd d-flex justify-content-start justify-content-md-around rounded py-3 p-2 text-decoration-none' to="#">
              <div data-aos="flip-right" data-aos-duration="1100" className=''>
                <img className='gestImg3 part rounded' src={farsh2} alt='slide' />
              </div>
            </Link>
            <Link onClick={Sabt} className='col-12 col-md-6 col-lg-1 btnGestd d-flex justify-content-end justify-content-md-around rounded py-3 p-2 text-decoration-none' to="#">
              <div data-aos="flip-right" data-aos-duration="1400" className=''>
                <img className='gestImg3 part rounded' src={spec2} alt='slide' />
              </div>
            </Link>
            <Link onClick={Sabt} className='col-12 col-md-6 col-lg-1 btnGestd d-flex justify-content-start justify-content-md-around rounded py-3 p-2 text-decoration-none' to="#">
              <div data-aos="flip-right" data-aos-duration="1400" className=''>
                <img className='gestImg3 part rounded' src={gold2} alt='slide' />
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </>
  )
}


function Sabt() {

  window.open( 'https://tezal.ir/user', '_blank' );

  return null;
}

export default Section4
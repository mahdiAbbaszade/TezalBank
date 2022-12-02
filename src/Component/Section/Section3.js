import React from 'react'
import { Link } from 'react-router-dom'
import Behinyabloan from '../../assest/Img/behinyab-loan.jpg'
import support from '../../assest/Img/support-team24h.jpg'
import Where from '../../assest/Img/where-isBuy.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'


const Section3 = () => {

  useEffect( () => {
    AOS.init();
    AOS.refresh();
  }, [] );


  return (
    <>
    <div className='my-5 py-5'>
      <div className='container-fluid py-0 px-2 mt-5 mb-5 px-md-2'>
        <p className=' text-center fw-bold p34'> حتما برات سواله</p>
        <div className='d-flex flex-column d-md-flex flex-md-row flex-md-wrap justify-content-around align-items-center pt-2 py-55'>
          <Link data-aos="fade-up" data-aos-duration="200" to="/What" className='text-decoration-none BehinyabloanFF rounded text-black my-2'>
            <div className='shadow-lg rounded BehinyabloanF'>
              <img className='Imgtwo rounded' src={support} alt='slide1' />
              <p className='BehinyabloanC bg-warning p-3 rounded-bottom fw-bold text-center textP'>چطور وام بگیرم ؟</p>
            </div>
          </Link>

          <Link data-aos="fade-down" data-aos-duration="400" to="/Documents" className='text-decoration-none BehinyabloanFF2 rounded text-black my-2'>
            <div className='shadow-lg rounded BehinyabloanF2'>
              <img className='Imgtwo rounded' src={Behinyabloan} alt='slide2' />
              <p className='BehinyabloanC2 bg-warning p-3 rounded-bottom fw-bold text-center textP'> مدارک چی لازمه ؟ </p>
            </div>
          </Link>

          <Link data-aos="fade-up" data-aos-duration="600" to="#" className='text-decoration-none BehinyabloanFF3 rounded text-black my-2'>
            <div className='shadow-lg rounded BehinyabloanF3'>
              <img className='Imgtwo rounded' src={Where} alt='slide3' />
              <p className='BehinyabloanC3 bg-warning p-3 rounded-bottom fw-bold text-center textP'> از کجاها قسطی بخرم ؟ </p>
            </div>
          </Link>

        </div>
      </div>
    </div>
    </>
  )
}

export default Section3
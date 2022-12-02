import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Cheque from '../../assest/Img/cheque.svg'
import Fine from '../../assest/Img/fine.svg'
import Language from '../../assest/Img/language.svg'
import Map from '../../assest/Img/map.svg'
import Shop from '../../assest/Img/shop.svg'
import AOS from "aos";
import "aos/dist/aos.css";



const Section2 = () => {

  useEffect( () => {
    AOS.init();
    AOS.refresh();
  }, [] );

  return (
    <>
      <div className='rounded father my-4 container-fluid d-flex justify-content-around align-items-center mt-5 px-2 py-1 mb-5 px-md-1 flex-wrap'>
        <div className='col-10 brother col-lg-10 mx-1 my-3 px-1 px-md-3 shadow-lg rounded-4 bg-secondary bg-opacity-50'>
          <Carousel interval="1000" variant="" className='d-flex px-1 px-md-3 justify-content-center text-center'>
            <Carousel.Item className='py-2 my-3 px-1 px-md-5'>
              <div className='shadow border-white px-1 px-md-3 py-3 rounded-2 d-flex flex-column align-items-center justify-content-center mx-1 mx-md-4 mt-3'>
                <img className='OneImg p-2 shadow bg-danger rounded' src={Cheque} alt="atribiot" />
                <p className='my-2 mx-1 mx-md-3 bg-primary py-2 fw-bold px-1 px-md-3 rounded text-center text-white w-75'> بدون نیاز به چک </p>
              </div>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='py-2 my-3 px-1 px-md-5'>
              <div className='shadow border-white px-1 px-md-3 py-3 rounded-2 d-flex flex-column align-items-center justify-content-center mx-1 mx-md-4 mt-3'>
                <img className='OneImg p-2 shadow bg-danger rounded' src={Fine} alt="atribiot" />
                <p className='my-2 mx-1 mx-md-3 bg-primary py-2 fw-bold px-1 px-md-3 rounded text-center text-white w-75'> فقط با یک سفته </p>
              </div>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='py-2 my-3 px-1 px-md-5'>
              <div className='shadow border-white px-1 px-md-3 py-3 rounded-2 d-flex flex-column align-items-center justify-content-center mx-1 mx-md-4 mt-3'>
                <img className='OneImg p-2 shadow bg-danger rounded' src={Shop} alt="atribiot" />
                <p className='my-2 mx-1 mx-md-3 bg-primary py-2 fw-bold px-1 px-md-3 rounded text-center text-white w-75'> +100 تنوع فروشگاه </p>
              </div>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='py-2 my-3 px-1 px-md-5'>
              <div className='shadow border-white px-1 px-md-3 py-3 rounded-2 d-flex flex-column align-items-center justify-content-center mx-1 mx-md-4 mt-3'>
                <img className='OneImg p-2 shadow bg-danger rounded' src={Map} alt="atribiot" />
                <p className='my-2 mx-1 mx-md-3 bg-primary py-2 fw-bold px-1 px-md-3 rounded text-center text-white w-75'> بدون مراجعه به بانک </p>
              </div>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='py-2 my-3 px-1 px-md-5'>
              <div className='shadow border-white px-1 px-md-3 py-3 rounded-2 d-flex flex-column align-items-center justify-content-center mx-1 mx-md-4 mt-3'>
                <img className='OneImg p-2 shadow-sm bg-danger rounded' src={Language} alt="atribiot" />
                <p className='my-2 mx-1 mx-md-3 bg-primary py-2 fw-bold px-1 px-md-3 rounded text-center text-white w-75'> پوشش شمال غرب کشور </p>
              </div>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Section2
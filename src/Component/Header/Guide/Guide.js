import React from 'react'
import Footer from '../../Footer/Footer'
import Header from '../Header'
import Creaditcard from '../../../assest/Img/vam/creaditcard.svg'
import Vlidation from '../../../assest/Img/vam/validation.svg'
import Installment from '../../../assest/Img/vam/installment.svg'
import Accordion from 'react-bootstrap/Accordion';

const Guide = () => {
    return (
        <>
            <Header />
            <div className='container-fluid p-0'>
                <div className='p-3 mt-5 mb-4'>
                    <h2 className='guideh2 text-center fw-bold my-5 mx-2 mx-md-5 py-5 rounded rounded-3'> راهنمای کلی دریافت وام از تزآل </h2>
                    <h4 className=' text-center guideh4'> راهنمای خرید اقساطی </h4>
                    <div className='d-flex flex-column flex-md-row align-items-center justify-content-evenly mb-4 mt-5'>
                        <div className='col-9 col-md-4 my-1 mx-1 bg-secondary bg-opacity-25 guide1 pt-3 pb-3 rounded text-center'>
                            <img className='my-3' src={Creaditcard} alt="راهنما" />
                            <p className='fw-bold guide1p'>شرایط دریفت وام</p>
                            <p className='text-primary fw-bold'>مراحل درافت وام</p>
                            <p className='text-primary fw-bold'>مدارک لازم</p>
                            <p className='text-primary fw-bold'>نحوه استفاده از وام</p>
                            <p className='text-primary fw-bold'>لغو درخواست وام</p>
                        </div>
                        <div className='col-9 col-md-4 my-1 mx-1 bg-secondary bg-opacity-25 guide1 pt-3 pb-3 rounded text-center p-0'>
                            <img className='my-3' src={Vlidation} alt="راهنما" />
                            <p className='fw-bold guide1p'> راهنمای سفته و قرارداد </p>
                            <p className='text-primary fw-bold'> ثبت امضای الکترونیکی </p>
                            <p className='text-primary fw-bold'> خرید سفته الکترونیکی </p>
                            <p className='text-primary fw-bold'> امضای آنلاین قراردادها </p>
                            <p className='text-primary fw-bold'> ... </p>
                        </div>
                        <div className='col-9 col-md-4 my-1 mx-1 bg-secondary bg-opacity-25 guide1 pt-3 pb-3 rounded text-center'>
                            <img className='my-3' src={Installment} alt="راهنما" />
                            <p className='fw-bold guide1p'> پرداخت اقساط </p>
                            <p className='text-primary fw-bold'> نحوه پرداخت اقساط </p>
                            <p className='text-primary fw-bold'> تسویه زودتر از موعد </p>
                            <p className='text-primary fw-bold'> سود و کارمزد </p>
                            <p className='text-primary fw-bold'> نمره اعتبار </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='guideh2 text-center fw-bold my-5'> سوالات متداول مشتریان </h2>
                    <div className='px-5 mb-5'>
                        <Accordion className='mx-5'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> ۱. سقف وامی که می‌تونم از تزآل بگیرم چقدره؟ </Accordion.Header>
                                <Accordion.Body>
                                    لورم    
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> 2. سفته‌های الکترونیکی چطور باطل میشن؟ </Accordion.Header>
                                <Accordion.Body>
                                  لورم
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> 3. برای دریافت وام لندو چه مدارکی رو باید بارگذاری کنم؟ </Accordion.Header>
                                <Accordion.Body>
                                  لورم
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> 4. برای ارتباط با پشتیبانی لندو، چه زمانی باید تماس بگیرم؟ </Accordion.Header>
                                <Accordion.Body>
                                  لورم
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Guide
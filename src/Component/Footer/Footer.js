import React from 'react'
import Instagram from '../../assest/Img/instagram.svg'
import Telegram from '../../assest/Img/telegram.svg'
import Linkdin from '../../assest/Img/linkedin.svg'
import Twitter from '../../assest/Img/twitter.svg'
import ImgTezal from '../../assest/Img/t.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='container-fluid d-flex flex-column d-md-flex flex-md-row align-items-center justify-content-center justify-content-md-start px-0 mt-3 bg-secondary bg-opacity-25'>
                <div className='d-flex flex-column d-md-flex flex-md-row justify-content-center align-items-center px-1 px-md-0 px-lg-1 py-1 '>
                    <div className='d-flex align-items-center p-1 p-md-0 py-2 me-1 me-md-0 me-lg-1 mb-2 mb-md-0 mb-lg-0 callborder'>
                        <p className='m-0 rounded-circle border border-2 border-primary'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9" stroke="currentColor" className='phone1 text-primary p-1'>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </p>
                        <p className='m-0 mx-1 mx-md-1 mx-lg-3 fw-bold'>با ما تماس بگیرین : 04436350269 </p>
                    </div>
                    <div className='d-flex align-items-center justify-content-center text-center'>
                        <p className='m-0 border rounded-circle border-danger border-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='phone1 text-danger p-1'>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                            </svg>
                        </p>
                        <p className='m-0 me-1 me-md-1 me-lg-3 fw-bold d-flex'> تزآل در شبکه های اجتماعی </p>
                    </div>
                </div>
                <div className='d-flex me-1 me-md-4 align-items-center'>
                    <Link to="#" className='mx-1 mx-md-3 text-decoration-none '>
                        <img className='CHanalImg1' src={Instagram} alt="chanal" />
                    </Link>
                    <Link to="#" className='mx-1 mx-md-3 text-decoration-none '>
                        <img className='CHanalImg text-primary' src={Telegram} alt="chanal" />
                    </Link>
                    <Link to="#" className='mx-1 mx-md-3 text-decoration-none '>
                        <img className='CHanalImg text-danger' src={Linkdin} alt="chanal" />
                    </Link>
                    <Link to="#" className='mx-1 mx-md-3 text-decoration-none '>
                        <img className='CHanalImg' src={Twitter} alt="chanal" />
                    </Link>
                </div>
            </div>
            <div className='d-flex flex-column d-md-flex flex-md-row bg-secondary bg-opacity-50 border-top border-white fff'>
                <div className='d-flex flex-column d-lg-flex flex-lg-row justify-content-around col-12 col-md-6 mt-2 px-2 fff2'>
                    <div className="px-1 fff3">
                        <ul className='d-flex flex-column m-0 p-3 fff4'>
                            <p className='text-black m-0 fw-bold my-1 border-bottom pb-2 mb-2'>راهنمای مشتریان</p>
                            <Link to="#" className=' ullist2 text-decoration-none text-black my-1 fffp'>آموزش گرفتن وام</Link>
                            <Link to="#" className=' ullist2 text-decoration-none text-black my-1 fffp'>مدارک لازم</Link>
                            <Link to="#" className=' ullist2 text-decoration-none text-black my-1 fffp'>محاسبه اقساط</Link>
                            <Link to="#" className=' ullist2 text-decoration-none text-black my-1 fffp'> سفته الکترونیک </Link>
                            <Link to="#" className=' ullist2 text-decoration-none text-black my-1 fffp'> امتیاز اعتبار </Link>
                            <Link to="#" className=' ullist2 text-decoration-none text-black my-1 fffp'> سوالات متداول </Link>
                        </ul>
                    </div>
                    <div className="px-1">
                        <ul className='d-flex flex-column m-0 p-3'>
                            <p className='  text-decoration-none text-dark fw-bold my-1 border-bottom pb-2 mb-2'> دسترسی سریع </p>
                            <Link to="#" className=' ullist2 text-decoration-none text-black my-1'>لیست فروشگاه ها</Link>
                            <Link to="/SellerRequest" className=' ullist2 text-decoration-none text-black my-1'>ثبت فروشگاه</Link>
                            <Link to="/What" className=' ullist2 text-decoration-none text-black my-1'> چطور وام بگیریم ؟ </Link>
                            <Link to="/Guide" className=' ullist2 text-decoration-none text-black my-1'> راهنما </Link>
                        </ul>
                    </div>
                    <div className="px-1">
                        <ul className='d-flex flex-column m-0 p-3'>
                            <p className=' text-decoration-none text-dark fw-bold my-1 border-bottom pb-2 mb-2'> تزآل </p>
                            <Link to="#" className='ullist2 text-decoration-none text-black my-1'>درباره ما</Link>
                            <Link to="#" className='ullist2 text-decoration-none text-black my-1'>تماس با ما</Link>
                            <Link to="#" className='ullist2 text-decoration-none text-black my-1'>همکاری با ما</Link>
                            <Link to="#" className='ullist2 text-decoration-none text-black my-1'>فرصت های شغلی</Link>
                        </ul>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <p className='m-0'>
                        <div className='d-flex justify-content-center px-5 py-1 '>
                            <img className='Imgtezal2 m-auto mt-4' src={ImgTezal} alt="Tezal" />
                        </div>
                        <p className='m-0 p-4 pt-1 FooterP'>
                            تزآل یک سیستم اعتبار دهی برای فروشگاه ها با تنوع مختلف در شهرهای مختلف خدمات اعتباری می دهد
                            . تزآل یک سیستم اعتبار دهی برای فروشگاه ها با تنوع مختلف در شهرهای مختلف خدمات اعتباری می دهد
                            . تزآل یک سیستم اعتبار دهی برای فروشگاه ها با تنوع مختلف در شهرهای مختلف خدمات اعتباری می دهد
                            . تزآل یک سیستم اعتبار دهی برای فروشگاه ها با تنوع مختلف در شهرهای مختلف خدمات اعتباری می دهد
                            . تزآل یک سیستم اعتبار دهی برای فروشگاه ها با تنوع مختلف در شهرهای مختلف خدمات اعتباری می دهد
                            . تزآل یک سیستم اعتبار دهی برای فروشگاه ها با تنوع مختلف در شهرهای مختلف خدمات اعتباری می دهد
                        </p>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
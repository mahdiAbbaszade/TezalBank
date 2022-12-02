import React from 'react'
import { Link } from 'react-router-dom'
import ImgTezal from '../../assest/Img/t.png'


const Header = () => {
    return (
        <>
            <div className='container-fluid d-flex p-0 header00'>
                <Link className='col-4 col-md-2 d-flex justify-content-center px-5 py-2 bg-danger header12' to="/">
                    <div >
                        <img className='Imgtezal m-0' src={ImgTezal} alt="Tezal" />
                    </div>
                </Link>
                <div className='col-5 d-none d-md-flex col-md-6 col-lg-5 d-flex align-items-center ps-1 ps-md-0 ps-lg-3 header13'>
                    <ul className='ul-List d-flex justify-content-start justify-content-md-around align-items-center mb-0 px-1 ms-1 px-md-1 px-lg-1 ms-lg-1'>
                        <Link className='d-none d-md-block text-decoration-none text-black' to="#">لیست فروشگاه ها</Link>
                        <Link className='d-none d-md-block text-decoration-none text-black' to="/SellerRequest">ثبت فروشگاه</Link>
                        <Link className='text-decoration-none text-black mx-3 mx-md-0 Header23' to="/Guide">راهنما</Link>
                        <Link className='text-decoration-none text-black chetor fw-bold Header23' to="/What">چطور وام بگیرم؟</Link>
                    </ul>
                </div>
                <div className='col-8 col-md-4 col-lg-5 d-flex header14'>
                    <form className='d-flex align-items-center justify-content-md-start justify-content-lg-around justify-content-end form-control bg-transparent border-0 p-0 me-4 me-md-2 me-lg-1'>
                        <div className='d-none d-md-none d-lg-flex'>
                            <input type="search" className='form-control p-1' placeholder='جستجوی فروشگاه' />
                            <button className='border-0 bg-transparent'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=' svgOne text-secondary mx-2'>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                        </div>
                        <div className=''>
                            <div className="d-flex border-end border-1">
                                <a className="btn btn-white border rounded-3 mx-2 mx-md-3 mx-lg-2" href='https://tezal.ir/user'>ورود</a>
                                <a className="btn btn-danger rounded-3" href="https://tezal.ir/tezal">ثبت نام</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}



export default Header
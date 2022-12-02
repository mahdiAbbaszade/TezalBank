import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Documents = () => {
    return (
        <>
            <div className='container-fluid p-0'>
                <Header />
                <div className=' d-flex my-3 px-1 px-md-2'>
                    <div className='col-12 col-md-9 bg-opacity-25 px-2'>
                        <p className='p-1 p-md-2 fw-bold mx-1 mx-md-2 Docp1'> مدارک لازم </p>
                        <p className='px-1 px-md-2 mx-1 mx-md-2 mb-3 fw-bold border-bottom pb-4 border-1 text-primary'> برای دریافت وام خرید کالا از تزآل، لازم است مدارک زیر را در حساب کاربری خود بارگذاری کنید: </p>
                        <p className='px-1 px-md-2 mx-1 mx-md-2 mb-4 mt-1 fw-bold'>  1. تصویر پشت و روی کارت ملی جدید / کارت ملی قدیمی به همراه رسید تعویض آن </p>
                        <p className='px-1 px-md-2 mx-1 mx-md-2 my-4 fw-bold'>  2. تصویر صفحه اول و صفحه توضیحات شناسنامه</p>
                        <p className='px-1 px-md-2 mx-1 mx-md-2 my-4 '>
                            <h6 className=' fw-bold'> 3.  یکی از مدارک شغلی زیر (فقط یکی از این سه مورد کافی است): </h6>
                            <ul className='px-1 px-md-3'>
                                <li className='my-3'>پرینت گردش حساب ۳ ماه آخر با مهر و امضای شعبه (صفحه اول، دوم و آخر هر ۳ ماه را باید به صورت جداگانه بارگذاری کنید)</li>
                                <li className='my-3'>فیش حقوقی</li>
                                <li className='my-3'>گواهی اشتغال به‌کار</li>
                            </ul>
                        </p>
                        <p className='px-1 mx-1 px-md-3 mx-md-2 my-4 fw-bold border-bottom pb-4 border-1 text-primary'>* لطفا به نکات زیر توجه کنید : </p>
                        <p className='px-1 mx-1 px-md-3 mx-md-2 my-4 '> اگر وام معوقه یا چک برگشتی داشته باشید، درخواست شما در اعتبارسنجی لغو خواهد شد. </p>
                        <p className='px-1 mx-1 px-md-3 mx-md-2 my-4 '> در رابطه با وضعیت خدمت سربازی آقایان، داشتن هرگونه معافیت از خدمت سربازی از جمله معافیت تحصیلی یا کارت پایان خدمت الزامی است. </p>
                    </div>
                    <div className='d-none d-md-block col-md-3 px-1 px-md-2 mt-5 border-end DocColLeft'>
                        <div className='d-none d-md-flex flex-column pt-5 '>
                            <p className="text-primary fw-bold">ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ</p>
                            <Link to="" className='text-decoration-none my-3 fw-bold DocLink'>ـــ لیست فروشگاه ها </Link>
                            <Link to="" className='text-decoration-none my-3 fw-bold DocLink'>ـــ ثبت فروشگاه </Link>
                            <Link to="/Guide" className='text-decoration-none my-3 fw-bold DocLink'>ـــ راهنما </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Documents
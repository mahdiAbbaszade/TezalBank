import React from 'react'
import Video from '../../assest/video/video.mp4'
import Marhaleye1 from '../../assest/Img/vam/step1.svg'

import Accordion from 'react-bootstrap/Accordion';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const What = () => {
  return (
    <>
      <div className='container-fluid p-0 mx-auto'>
        <Header />
        <div className='py-2 py-md-4 bg-primary px-1 mx-2 px-md-3 mx-md-5 mt-5 rounded-4'>
          <div className='d-flex flex-column flex-md-row p-1'>
            <div className='col-12 col-md-6 d-flex flex-column justify-content-center my-3 px-3'>
              <p className='m-0 fw-bold display-1 pe-0 pe-md-5 mb-3 mb-4 text-white whpp'> TEZAL</p>
              <p className='m-0 fw-bold display-6 pe-0 pe-md-5 mt-2 mb-4 whpp'> میخای از تزآل وام بگیری ؟ </p>
              <span className='fw-bold display-6 bg-white py-2 ps-0 ps-md-4 my-3 mx-auto mx-md-2 mx-lg-3 ms-auto rounded-4 whpp'> اینجا مخصوص خودته !</span>
              <small className='px-2 px-md-2 px-lg-4 fw-bold mt-3 text-white text-center'>
                توی این صفحه مراحل دریافت وام تزآل رو بهت نشون دادیم تا بتونی با انتخاب هر کدوم از این مراحل، توضیحات کاملش رو ببینی. توی ویدئو روبرو هم همه مراحل دریافت وام تزآل رو به ساده‌ترین شکل ممکن توضیح دادیم.
              </small>
            </div>
            <div className='col-12 col-md-6 justify-content-center d-flex p-1 p-md-1 p-lg-3'>
              <video className='rounded' width="100%" height="400" controls>
                <source src={Video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className='mt-4 mb-2'>
          <div className='p-2 whppp2'>
            <h2 className='text-center fw-bold py-2 pb-5 whppp2h2'> مراحل دریافت وام از تزآل</h2>
            <div className='whppp2-1'>
              <div className='d-flex flex-column whppp2-1-1'>
                <h3 className='fw-bold mb-3'>ثبت درخواست و بارگذاری مدارک</h3>
                <p>
                  از صفحه فروشگاه‌های لندو ، یه فروشگاه رو انتخاب کن و درخواست وام بده. بعد توی حساب کاربریت، عکس مدارک رو بارگذاری کن و بعدش هم کد ملی و شماره موبایلت رو وارد کن تا درخواست اعتبارسنجیت ثبت بشه.
                </p>
              </div>
              <div>
                <img className='' src={Marhaleye1} alt='مراحل' />
              </div>
              <div className='whppp2-empty'></div>
            </div>
            <div className='whppp2-1'>
              <div className='whppp2-empty'></div>
              <div>
                <img className='' src={Marhaleye1} alt='مراحل' />
              </div>
              <div className='d-flex flex-column whppp2-1-1 pe-5'>
                <h3 className='fw-bold mb-3'> خرید سفته الکترونیکی </h3>
                <p> توی این مرحله باید سفته تهیه کنی؛ اونم به شکل کاملا آنلاین و از طریق سامانه سفته الکترونیکی بانک آینده.  </p>
              </div>
            </div>
            <div className='whppp2-1'>
              <div className='d-flex flex-column whppp2-1-1'>
                <h3 className='fw-bold mb-3'> ثبت امضای الکترونیکی  </h3>
                <p>
                  از اونجایی که سفته و قرارداد کاغذی از لندو حذف شده، برای امضای سفته و قرارداد به امضای الکترونیکی نیاز داری. این امضای الکترونیکی رو باید با نرم‌افزار آینده‌ساین ثبت کنی.
                </p>
              </div>
              <div>
                <img className='' src={Marhaleye1} alt='مراحل' />
              </div>
              <div className='whppp2-empty'></div>
            </div>
            <div className='whppp2-1'>
              <div className='whppp2-empty'></div>
              <div>
                <img className='' src={Marhaleye1} alt='مراحل' />
              </div>
              <div className='d-flex flex-column whppp2-1-1 pe-5'>
                <h3 className='fw-bold mb-3'> امضای قراردادها </h3>
                <p>
                  بعد از اینکه ما مدارک و سفته‌ شما رو بررسی کردیم، باید قراردادهای لندو و بانک آینده رو با امضای الکترونیکی، امضا کنی.
                </p>
              </div>
            </div>
            <div className='whppp2-1'>
              <div className='d-flex flex-column whppp2-1-1'>
                <h3 className='fw-bold mb-3'> واریز پیش‌ پرداخت </h3>
                <p>توی این مرحله لازمه پیش‌پرداخت وامت رو واریز کنی.بعدش دیگه وامت آماده میشه و می‌تونی ازش استفاده کنی. </p>
              </div>
              <div>
                <img className='' src={Marhaleye1} alt='مراحل' />
              </div>
              <div className='whppp2-empty'></div>
            </div>
            <div className='whppp2-1'>
              <div className='whppp2-empty'></div>
              <div>
                <img className='' src={Marhaleye1} alt='مراحل' />
              </div>
              <div className='d-flex flex-column whppp2-1-1 pe-5'>
                <h3 className='fw-bold mb-3'> دریافت وام و خرید از فروشگاه </h3>
                <p>
                  اگه برای خرید اقساطی فروشگاه تیمچه رو انتخاب کرده باشی، مبلغ وامت توی کیف پول سایت تیمچه شارژ میشه. برای سایر فروشگاه‌ها هم مبلغ وام به شکل یه کد تخفیف صددرصدی در اختیارت قرار می‌گیره تا باهاش از سایت فروشگاه خرید کنی.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-info bg-opacity-25 my-2 mt-5 mx-5  text-center py-5 rounded-4'>
          <p className='text-center py-5 fw-bold whpp3'> هنوز برای دریافت وام تزآل اقدام نکردی ؟</p>
          <button className='btn btn-success py-3 px-5 text-center fw-bold'> درخواست وام </button>
        </div>
        <div className='bg-secondary bg-opacity-25 my-2 mt-5 mb-5 mx-0 text-center py-5 '>
          <h2 className='fw-bold whpp4 my-4'>
            شاید این سوالات برای شما هم اتفاق بیوفتد !
          </h2>
          <div className=''>
            <Accordion className='mx-5 my-3'>
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
        <Footer />
      </div>
    </>
  )
}

export default What
import React from 'react'
import Header from '../Header/Header'
import Banner from '../../assest/Img/vam/banner.webp'
import Footer from '../Footer/Footer'

const SellerRequest = () => {
  return (
    <>
      <div className='container-fluid p-0'>
        <Header />
        <div className='d-flex flex-column flex-lg-row p-2 bg-light mb-5'>
          <div className='col-lg-6 p-3 px-5'>
            <div>
              <p className=' fw-bold sellp1'> فروش اقساطی </p>
              <p className=' fw-bold sellp2'>راهکاری برای فروش بیشتر</p>
            </div>
            <div className='my-5'>
              <p className='sellp3'>
                فروشگاه اینترنتی خود را به لندو اضافه کنید تا همچون هزاران فروشگاه معتبر دیگر، امکان خرید اقساطی آسان برای مشتریان شما فراهم شود.
                لندو اولین و بزرگ‌ترین پلتفرم خرید اقساطی است و با بانک آینده به‌عنوان تأمین‌کننده مالی همکاری می‌کند.
              </p>
            </div>
            <div className='my-5'>
              <button className='btn btn-success fw-bold p-3 text-white'> ثبت درخواست همکاری </button>
            </div>
          </div>
          <div className='col-lg-6 d-flex justify-content-center p-4 p-md-1 sell1'>
            <img className='Sellimg py-5' src={Banner} alt='همکاری' />
            <div className='sell1-2 bg-success p-3 p-md-4 d-flex rounded-3'>
              <div className='mx-2 px-2 text-center'>
                <h2>فروشگاه فعال</h2>
                <p className=' fw-bold m-0'>+300</p>
              </div>
              <div className='mx-2 px-2 text-center'>
                <h2>فروش ماهانه</h2>
                <p className=' fw-bold m-0'>+150</p>
              </div>
            </div>
          </div>
        </div>
        <div className='py-5 text-center d-flex flex-column align-items-center justify-content-center text-white '>
          <h2 className='fw-bold text-center my-5 text-dark sellh2'>مزایای همکاری</h2>
          <div className='px-1 mx-1 mx-md-3 mx-lg-5'>
            <div className='mx-0 mx-lg-5 d-flex justify-content-around text-center bg-primary rounded-3'>
              <div className='mx-1 p-1 mx-md-3 p-md-3 text-center'>
                <h3 className='fw-bold my-2 sellvalue'>خرید اقساطی آسان</h3>
                <p className='pe-4 my-4 sellvaluep'>مشتریان شما می‌توانند از طریق تزآل ، بدون نیاز به چک خرید اقساطی خود را انجام دهند.</p>
              </div>
              <div className='mx-1 p-1 mx-md-3 p-md-3'>
                <h3 className='fw-bold my-2 sellvalue'>ریسک صفر</h3>
                <p className='pe-4  my-4 sellvaluep'>تمامی مسئولیت دریافت اقساط از مشتری به عهده تزآل است. همچنین بعد از ارسال کالا برای مشتری، تزآل مبلغ کد را با شما تسویه خواهد کرد.</p>
              </div>
              <div className='mx-1 p-1 mx-md-3 p-md-3'>
                <h3 className='fw-bold my-2 sellvalue'>برندینگ </h3>
                <p className='pe-4  my-4 sellvaluep'>حضور شما در وب‌سایت لندو با میلیون‌ها بازدید ماهانه، تاثیر زیادی بر دیده شدن و رشد برند شما خواهد گذاشت. </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default SellerRequest
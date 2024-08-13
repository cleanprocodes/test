import React, { useState, useEffect } from 'react';
import { Calendar, utils } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import Header from '../repeater/Header';
import Footer from '../repeater/Footer';
import Float from '../repeater/Float';
import FloatUp from '../repeater/FloatUp';

function Contact() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (selectedDay) {
      const formatted = `${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`;
      setFormattedDate(formatted);
    }
  }, [selectedDay]);

  const handleCalendarFocus = () => {
    document.getElementById('calendar-wrapper').style.display = 'block';
  };

  const handleCalendarBlur = () => {
    setTimeout(() => {
      document.getElementById('calendar-wrapper').style.display = 'none';
    }, 100); // با تأخیر کوتاهی برای جلوگیری از بسته شدن ناگهانی
  };

  return (
    <>
      <Header />
      <section id='contact'>
        {/* details */}
        <article className='contact-details'>
          <div className='contact-details-context'>
            <h1 className='h1 heading'>ارتباط با تیم لیزر افزار</h1>
            <p className='subheading -mr-4'>درخواست مرجوع کردن کالا در گروه دستگاه جوش با دلیل "انصراف از خرید" تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد در صورت پلمپ بودن، کالا نباید باز شده باشد</p>
            <div className='flex items-center justify-center mt-12'><FloatUp /></div>
          </div>
          <img className='contact-details-img' src='../../../src/assets/images/call/call-bg.png' />
        </article>
        {/* address */}
        <article className='contact-address'>
          <div className='contact-box'>
            <div className='borderbox'></div>
            <div className='borderbox'></div>
            <img className='fit-image max-w-[550px] max-h-[370px]' src="../../../src/assets/images/call/call-bg2.png" alt="تماس با لیزر افزار پرتو" />
          </div>
          <div>
            <div className='contact-address-row'>
              <img className='w-7 h-7' src="../../../src/assets/images/icons/icon-loc.png" alt="مکان لیزر افزار پرتو" />
              <span className='contact-address-context'>تهران بزرگراه فتح بعد از فتح دهم مجتمع تهران طبقه اول پلاک ۵۵</span>
            </div>
            <div className='contact-address-row'>
              <img className='w-7 h-7' src="../../../src/assets/images/icons/icon-call.png" alt="شماره همراه لیزر افزار پرتو" />
              <span className='contact-address-context'>۰۹۱۲۱۲۰۴۸۴۵ و ۰۹۲۰۵۲۰۴۸۴۵</span>
            </div>
            <div className='contact-address-row'>
              <img className='w-7 h-7' src="../../../src/assets/images/icons/icon-email.png" alt="ایمیل لیزر افزار پرتو" />
              <span className='contact-address-context'>۰۲۱۶۶۸۰۰۰۸۲</span>
            </div>
            <div className='contact-address-row'>
              <img className='w-7 h-7' src="../../../src/assets/images/icons/icon-call.png" alt="شماره تماس لیزر افزار پرتو" />
              <span className='contact-address-context'>۰۲۱۴۴۶۱۶۳۳۹</span>
            </div>
          </div>
        </article>
        {/* form */}
        <article className='contact-form'>
          {/* context */}
          <div>
            <h2 className='h3'>فرم ارتباط با ما</h2>
            <p className="subheading mt-2 sm:mt-8 md:mt-10 xl:mt-15">فقط مشخصات خود را وارد کنید تا 30 دقیقه تماس اکتشافی داشته باشید!</p>
          </div>
          {/* form */}
          <form action="" className='form'>
            <label htmlFor="user" className='inputs'>
              <span className='label-name'>نام و نام خانوادگی</span>
              <input type="text" name="user" id="user" placeholder='نام و نام خانوادگی' />
            </label>
            <div className='flex gap-4 items-center'>
              <label htmlFor="email" className='inputs'>
                <span className='label-name'>ایمیل</span>
                <input dir='ltr' type="text" name="email" id="email" placeholder='ایمیل' />
              </label>
              <label htmlFor="time" className='inputs flex items-center'>
                <span className='label-name'>تاریخ</span>
                <input dir='ltr'
                  type="text"
                  name="time"
                  id="time"
                  placeholder='تاریخ'
                  value={formattedDate}
                  onFocus={handleCalendarFocus}
                  onBlur={handleCalendarBlur}
                  readOnly
                />
                <div id="calendar-wrapper" className="absolute" style={{ display: 'none' }}>
                  <Calendar
                    value={selectedDay}
                    onChange={setSelectedDay}
                    shouldHighlightWeekends
                    locale="fa" // فارسی
                    calendarClassName="custom-calendar"
                    colorPrimary="#0fbcf9" // رنگ آبی
                    colorPrimaryLight="rgba(75, 207, 250, 0.4)"
                  />
                </div>
                <img className='ml-10' src="../../../src/assets/images/icons/icon-Calender.png" alt="آیکون زمان" />
              </label>
            </div>
            <label htmlFor="textarea" className='inputs'>
              <span className='label-name'>متن پیام</span>
              <textarea cols={48} rows={8} placeholder='متن پیام' />
            </label>
            <div className='flex justify-end'>
              <button type='submit' className='btn btn--primary px-11 font-bold font-lg'>ارسال</button>
            </div>
          </form>
        </article>
        <Float />
        <Footer />
      </section>
    </>
  )
}

export default Contact


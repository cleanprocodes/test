import React from 'react'

function ConnectionSection() {
  return (
    <section id='connection'>
        <h5 className="h5 heading">برای ارتباط بهتر و ارسال خبرنامه بیمه آنلاین</h5>
        <p className="description">استفاده از وب سایت مانا آسونه! چون هدف چون هدفمون ساده کردن مراحل سنتی و پیچیده ی بیمه ست. ما سعی کردیم با طراحی وب سایتی کاربرمدار و روان، فرآیند خرید بیمه رو شفاف کنیم، فقط کافیه با انتخاب نوع بیمه مورد نیازت شروع کنی و قدم به قدم مسیرو رو ادامه بدی.</p>
        <form className='form' action='' method='get'>
            <input className='w-[70%] sm:w-[80%]' type="email" id='email' placeholder='آدرس ایمیل خود را وارد نمایید' required/>
            <button type='submit' className='btn btn--primary'>ارسال ایمیل</button>
        </form>
    </section>
  )
}

export default ConnectionSection
import React from 'react'

function ManagerSection() {
  return (
    <section id='manager'>
        {/* image */}
        <div className='manager-images'>
            <img className='manager-image' src="../../../src/assets/images/cnc/cnc2.png" alt="بروز ترین دستگاه سی ان سی" />
            <div className='manager-bg'></div>
        </div>
        {/* context */}
        <div className='lg:w-[50%] flex flex-col gap-10'>
            <h2 className='h2 heading'>ارائه ی بهترین و باکیفیت ترین دستگاه های به روز</h2>
            <p className='description'>شرکت لیزر افزار پرتو به دلیل سالها  تجربه در زمینه طراحی و ساخت ماشین آلات لیزری و بهره گیری از ماشین الات صنعتی دقیق توانایی و آمادگی ساخت انواع سی ان سی لیزری در زمینه برش و جوشکاری لیزری را دارا میباشد.</p>
            <button className='btn btn--primary'>اطلاعات بیشتر</button>
        </div>
    </section>
  )
}

export default ManagerSection
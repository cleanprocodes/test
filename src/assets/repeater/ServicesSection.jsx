import React from 'react'

function ServicesSection() {
  return (
    <section id='services'>
        <div className='services-row1'>
            <h2 className="h3 heading text-white">مدیریت بخش ساخت و تولید سخت افزارها</h2>
            <p className="description">کلیه مراحل طراحی و ساخت این دو دستگاه شامل شاسی , مکانیک , اپتیک , نرم افزار و تابلو برق در این شرکت آورده شده است.</p>
        </div>
        <div className='services-row2'>
            <div className='services-row2-box'>
                <span className='text-services text-base font-normal'>کلیه مراحل طراحی و ساخت این دو دستگاه شامل شاسی , مکانیک , اپتیک , نرم افزار و تابلو برق در این شرکت آورده شده است.</span>
                <div className='flex items-center justify-center overflow-hidden mt-7 mb-5'>
                    <img className='fit-image w-[102px] h-[102px] rounded-full ' src="../../../src/assets/images/privates/aliSeyfi.png" alt="علی سیفی" />
                </div>
                <span className='text-3xl inline-block'>علی سیفی</span>
                <span>مدیریت</span>
            </div>
        </div>
    </section>
  )
}

export default ServicesSection
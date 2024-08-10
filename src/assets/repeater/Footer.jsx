import React from 'react'

function Footer() {
    return (
        <footer id='footer'>
            {/* logo */}
            <div className='footer-description'>
                <div className='footer-logo'>
                    <img className='fit-image max-w-[121px]' src="../../../src/assets/images/icons/footer-logo.png" alt="لیزر افزار پرتو" />
                    <h6 className='h6 heading'>لیزر افزار</h6>
                </div>
                <p className='text-justify text-lg xl:w-[80%]'>شرکت لیزر افزار پرتو به دلیل سالها  تجربه در زمینه طراحی و ساخت ماشین آلات لیزری و بهره گیری از ماشین الات صنعتی دقیق توانایی و آمادگی ساخت انواع سی ان سی لیزری در زمینه برش و جوشکاری لیزری را دارا میباشد.</p>
                <span className="text-base lg:text-sm">تلفن تماس: ۰۹۱۲۱۲۰۴۸۴۵</span>
            </div>
            {/* links */}
            <div className='footer-links'>
                <h6 className='h6 heading'>خدمات ما</h6>
                <div className='footer-box'>
                    <span>پشتیبانی </span>
                    <span>ضمانت کیفیت</span>
                    <span>خدمات پس از فروش</span>
                    <span>حمل و نقل به سراسر کشور</span>
                </div>
            </div>
            {/* social */}
            <div className='footer-social'>
                <h6 className='h6 heading'>شبکه های اجتماعی</h6>
                <div className='footer-box'>
                    <div className='footer-box-social'>
                        <span>اینستاگرام</span>
                        <a href="http://">
                            <img className='icon' src="../../../src/assets/images/icons/instagram.png" alt="اینستاگرام لیرز افزار پرتو" />
                        </a>
                    </div>
                    <div className='footer-box-social'>
                        <span>تلگرام</span>
                        <a href="http://">
                            <img className='icon' src="../../../src/assets/images/icons/telegram.png" alt="تلگرام لیرز افزار پرتو" />
                        </a>
                    </div>
                    <div className='footer-box-social'>
                        <span>واتساپ</span>
                        <a href="http://">
                            <img className='icon' src="../../../src/assets/images/icons/whatsapp.png" alt="واتساپ لیرز افزار پرتو" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import React, { useState } from 'react';
import Header from '../repeater/Header';
import Footer from '../repeater/Footer';
import Float from '../repeater/Float';

const initialRobots = [
  { id: 1, title: "ربات جوش و لیزر", subtitle: "ربات جوش و لیزر", src: "../../../src/assets/images/robots/robot1.png" },
  { id: 2, title: "ربات جوش و لیزر", subtitle: "ربات جوش و لیزر", src: "../../../src/assets/images/robots/robot2.png" },
  { id: 3, title: "ربات جوش و لیزر", subtitle: "ربات جوش و لیزر", src: "../../../src/assets/images/robots/robot3.png" },
  { id: 4, title: "ربات جوش و لیزر", subtitle: "ربات جوش و لیزر", src: "../../../src/assets/images/robots/robot4.png" },
];

function Newest({content}) {
 
  const MAX_LENGTH = 50;
  const ITEMS_PER_PAGE = 4; // تعداد آیتم‌ها در هر صفحه

  const [idImage, setIdImage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1); // شماره صفحه فعلی

  const handleSelected = (id) => {
    setIdImage(id);
  };

  const totalPages = Math.ceil(content["ربات و جوش لیزر"].length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedContent = content["ربات و جوش لیزر"].slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <Header />
      <section id='newest' className='h-screen mt-20'>
        {/* header */}
        <div className='newest-header'>
          <header className='flex gap-4 lg:gap-11 flex-col lg:flex-row items-center'>
            <div className='newest-header-boximages'>
              <img className='lg:w-[528px] lg:h-[482px] h-[300px] object-cover bg-bgBox rounded-md' src={initialRobots.find(i => i.id === idImage)?.src || ""} alt={initialRobots.find(i => i.id === idImage)?.title || ""} />
              <div className='newest-header-images'>
                {initialRobots.map(i => {
                  return (
                    <img className='w-[144px] h-[114px] fit-image bg-bgBox rounded-md' key={i.id} onClick={() => handleSelected(i.id)} src={i.src} alt={i.title} />
                  );
                })}
              </div>
            </div>
            <div className='lg:w-[50%] lg:pl-20'>
              <h1 className='h1 heading'>ربات و جوش لیزر</h1>
              <p className='subheading mt-11'>امروزه رباتهای صنعتی نقشی کلیدی در بالا بردن کیفیت و تیراژ محصولات در صنایع مختلف ایفا مینمایند. بسیاری از صنایع، خطوط تولید سنتی خود را به خطوط تولید رباتیک تغییر داده و با توجه به پیچیدگی برخی کاربردها، استفاده از رباتهای صنعتی روشی بسیار کارآمدتر می باشد. یکی از کاربردهای مورد استقبال تولید کنندگان در سالهای اخیر جوشکاری لیزر رباتیک بوده که در ادامه پس از معرفی انواع لیزرهای صنعتی، به بررسی کلیه جوانب آن خواهیم پرداخت.</p>
            </div>
          </header >
        </div>
        {/* description */}
        <div className='newest-description'>
          <div className='newest-description-box'>
            <div className='newest-box'>
              <img className='w-[122px] h-[122px]' src="../../../src/assets/images/products/product-icon1.png" alt="پلترفم دستگاه های جوش" />
              <h5 className='h5 font-bold'>پلترفم دستگاه های جوش</h5>
              <p>ربات های صنعتی با انعطاف و آزادی عمل فوق العاده ابزاری کارآمد در اجرای عملیات گوناگون خصوصا جوشکاری قطعات منفصله می باشند</p>
            </div>
            <div className='newest-box'>
              <img className='w-[122px] h-[122px]' src="../../../src/assets/images/products/product-icon2.png" alt="پلترفم دستگاه های جوش" />
              <h5 className='h5 font-bold'>پلترفم دستگاه های جوش</h5>
              <p>ربات های صنعتی با انعطاف و آزادی عمل فوق العاده ابزاری کارآمد در اجرای عملیات گوناگون خصوصا جوشکاری قطعات منفصله می باشند</p>
            </div>
            <div className='newest-box'>
              <img className='w-[122px] h-[122px]' src="../../../src/assets/images/products/product-icon3.png" alt="پلترفم دستگاه های جوش" />
              <h5 className='h5 font-bold'>پلترفم دستگاه های جوش</h5>
              <p>ربات های صنعتی با انعطاف و آزادی عمل فوق العاده ابزاری کارآمد در اجرای عملیات گوناگون خصوصا جوشکاری قطعات منفصله می باشند</p>
            </div>
          </div>
          <p className='subheading'>سورس شامل یونیتی متشکل از منبع تغذیه، محیط فعال، آینه ها، کارت شبکه، سیستم خنک کاری… میباشد. با توجه به حرارت بالا حین تولید پرتو و جوشکاری، چیلرهای صنعتی نقشی حیاتی در خنک کاری سیستم لیزر و هد جوشکاری ایفا مینمایند. پرتو تولید شده در لیزرهای حالت جامد از طریق کابل فیبر نوری به هد جوشکاری هدایت میشود. جهت جوشکاری لیزر توسط ربات صنعتی انواع متفاوتی از هد اپتیک موجود می باشد. در تصاویر زیر سه مورد از متداول ترین اپتیک های جوش قابل مشاهده می باشد.</p>
          <br />
          <p className='subheading'>ربات های صنعتی با انعطاف و آزادی عمل فوق العاده ابزاری کارآمد در اجرای عملیات گوناگون خصوصا جوشکاری قطعات منفصله می باشند. نصب اپتیک جوشکاری بر روی یک ربات صنعتی یکی از کارآمدترین راه حل ها جهت جوشکاری قطعات میباشد. در جوشکاری با پرتو لیزر نیاز به تماس هد اپتیک با قطعه نمیباشد و پرتو با فاصله ای به میزان فوکال لنز به قطعه ساطع می شود. جوشکاری رباتیک توسط پرتو لیزر، راه حلی منحصر بفرد جهت دسترسی آسان به تمامی نقاط مورد نیاز جوشکاری و بالا بردن تیراژ تولید به حساب می آید.
          </p>
        </div>
        {/* introduce */}
        <div className='newest-introduce'>
          <span className='text-3xl font-bold mb-11 inline-block'>معرفی دستگاه های مرتبط</span>
          <div className="content">
            {displayedContent.map((c) => (
              <div className='box h-96' key={c.id}>
                <div className='h-56 rounded-lg bg-bgBox'>
                  <img className='fit-image' src={c.src} alt={c.title} />
                </div>
                <h4 className='h4'>{c.title}</h4>
                <span className='flex items-center gap-1.5'>
                  <span className='box-circle hidden'></span>
                  <span>{c.desc.length <= MAX_LENGTH ? c.desc : c.desc.slice(0, MAX_LENGTH) + "..."}</span>
                </span>
              </div>
            ))}
          </div>
          <div className='show-tab'>
            {[...Array(totalPages)].map((_, index) => (
              <span
                key={index}
                className={`tabber bg-primary ${currentPage === index + 1 ? 'bg-white border border-primary' : ''}`}
                onClick={() => handlePageChange(index + 1)}
              >
              </span>
            ))}
          </div>
        </div>
        <Float/>
        <Footer />
      </section>
    </>
  );
}

export default Newest;

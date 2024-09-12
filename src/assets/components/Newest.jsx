import React, { useState, useEffect } from 'react';
import Header from '../repeater/Header';
import Footer from '../repeater/Footer';
import Float from '../repeater/Float';

function Newest({ dataJson }) {
  const [idImage, setIdImage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1); // Current page number

  const ITEMS_PER_PAGE = 4; // Number of items per page

  useEffect(() => {
    if (dataJson.length > 0) {
      setIdImage(dataJson[0].products[0]?.id || 1);
    }
  }, [dataJson]);

  const handleSelected = (id) => {
    setIdImage(id);
  };

  const robotsCategory = dataJson.find(category => category.name === "ربات و جوش لیزر");
  const totalPages = robotsCategory ? Math.ceil(robotsCategory.products.length / ITEMS_PER_PAGE) : 0;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedContent = robotsCategory ? robotsCategory.products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  ) : [];

  const selectedProduct = dataJson[0]?.products.find(i => i.id === idImage);

  return (
    <>
      <Header />
      <section id='newest' className='h-screen mt-20'>
        {/* header */}
        <div className='newest-header'>
          <header className='flex gap-4 lg:gap-11 flex-col lg:flex-row items-center'>
            <div className='newest-header-boximages'>
              <img
                className='lg:w-[528px] lg:h-[482px] h-[300px] object-cover bg-bgBox rounded-md'
                src={selectedProduct ? selectedProduct.src : "path/to/placeholder-image.png"}
                alt={selectedProduct ? selectedProduct.title : "Loading..."}
              />
              <div className='newest-header-images'>
                {dataJson[0]?.products.map(i => (
                  <img
                    className='w-[144px] h-[114px] fit-image bg-bgBox rounded-md'
                    key={i.id}
                    onClick={() => handleSelected(i.id)}
                    src={i.src}
                    alt={i.title}
                  />
                ))}
              </div>
            </div>
            <div className='lg:w-[50%] lg:pl-20'>
              <h1 className='h1 heading'>ربات و جوش لیزر</h1>
              <p className='subheading mt-11'>امروزه رباتهای صنعتی نقشی کلیدی در بالا بردن کیفیت و تیراژ محصولات در صنایع مختلف ایفا مینمایند...</p>
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
          <p className='subheading'>سورس شامل یونیتی متشکل از منبع تغذیه، محیط فعال، آینه ها، کارت شبکه، سیستم خنک کاری… میباشد...</p>
          <br />
          <p className='subheading'>ربات های صنعتی با انعطاف و آزادی عمل فوق العاده ابزاری کارآمد در اجرای عملیات گوناگون خصوصا جوشکاری قطعات منفصله می باشند...</p>
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
                  <span>{c.subtitle.length <= 50 ? c.subtitle : c.subtitle.slice(0, 50) + "..."}</span>
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
        <Float />
        <Footer />
      </section>
    </>
  );
}

export default Newest;

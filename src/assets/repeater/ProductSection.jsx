import React, { useRef, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, PlusSmallIcon } from '@heroicons/react/20/solid'
import Search from '../repeater/Search'

//Product-section
function ProductSection({ dataJson }) {
    const [activeTab, setActiveTab] = useState(1);
    const [options, setOptions] = useState(dataJson[0].products); // Load the first category initially
    const optionRefs = useRef([]);

    const handleOptionClick = (option, index) => {
        setActiveTab(index + 1);
        setOptions(dataJson[index].products); // Set products based on selected category
        optionRefs.current[option].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    };

    const handlePrevPage = () => {
        setActiveTab((index) => {
            const newIndex = Math.max(index - 1, 1);
            const option = Object.keys(dataJson)[newIndex - 1];
            setOptions(dataJson[newIndex - 1].products); // Update products
            optionRefs.current[option].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            return newIndex;
        });
    };

    const handleNextPage = () => {
        setActiveTab((index) => {
            const newIndex = Math.min(index + 1, Object.keys(dataJson).length);
            const option = Object.keys(dataJson)[newIndex - 1];
            setOptions(dataJson[newIndex - 1].products); // Update products
            optionRefs.current[option].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            return newIndex;
        });
    };

    return (
        <>
            {/* Header Section */}
            <section id='product'>
                <img className='fit-image lg:w-[50%]' src="../../../src/assets/images/cnc/cnc.jpg" alt="دستگاه سی ان سی" />
                <div className='context lg:w-[50%]'>
                    <h1 className='h1 heading'>ماشین های <strong className='text-primary'>سی ان سی لیزری</strong> به خوبی توانایی خود را پیشبرد</h1>
                    <p className='description'>امروزه ماشین های سی ان سی لیزری به خوبی توانایی خود را پیشبرد صنایع دنیا در ساخت و مونتاژ و تصحیح قطعات به اثبات رسانده اند</p>
                    <button className='btn btn--primary'>اطلاعات بیشتر</button>
                    <div className='context-count'>
                        {dataJson.slice(0, 3).map((item, index) => (
                            <div className='mx-6' key={item.id}>
                                <div className='flex items-center'>
                                    <span className='text-primary'>
                                        <PlusSmallIcon className='w-7 h-7 -ml-2 mb-1' />
                                    </span>
                                    <span className='text-2xl font-bold'>{item.products.length}</span>
                                </div>
                                <span className='block -mr-3'>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Section */}
            <div className='relative sm:p-4'>
                <Search />
            </div>
            <div id='productBox'>
                <header>
                    <h2 className='h2 text-center mt-12 lg:mt-44 xl:mt-64'>محصولات سخت افزاری</h2>
                    <p className="subheading text-center mt-4">در سالهای دور لیزر های گازکربنیک پرقدرت جایگاه ویژه ای در صنعت برش لیزری داشتند . اما با ورود لیزرهای حالت جامد علی الخصوص لیزرهای فیبر </p>
                </header>
                <div className='mt-28'>
                    <div className="box-options">
                        {dataJson.map((option, index) => (
                            <h4
                                key={index}
                                ref={el => optionRefs.current[index] = el}
                                className={`options h4 ${activeTab === index + 1 ? "active" : ""}`}
                                onClick={() => handleOptionClick(option.name, index)}
                            >
                                {option.name}
                            </h4>
                        ))}
                    </div>

                    <div className="content">
                        {options.map((product) => (
                            <div className='box h-96' key={product.id}>
                                <div className='h-56 rounded-lg bg-bgBox'>
                                    <img className='fit-image' src={product.src} alt={product.title} />
                                </div>
                                <h4 className='h4'>{product.title}</h4>
                                <span className='flex items-center gap-1.5'>
                                    <span className='box-circle'></span>
                                    <span>{product.subtitle}</span>
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className='box-buttons'>
                        <button
                            className={`btn flex items-center ${activeTab > 1 ? "active" : "disabled"}`}
                            onClick={handlePrevPage}
                            disabled={activeTab <= 1}>
                            <span>قبلی</span>
                            <ChevronLeftIcon className='w-5 h-5 -ml-2' />
                        </button>
                        <div>
                            {dataJson.map((_, index) => (
                                <span onClick={() => handleOptionClick(dataJson[index].name, index)} className={`text-2xl cursor-pointer mx-3 ${index === activeTab - 1 ? "border-b" : ""}`} key={index}>{index + 1}</span>
                            ))}
                        </div>
                        <button
                            className={`btn flex items-center ${activeTab < dataJson.length ? "active" : "disabled"}`}
                            onClick={handleNextPage}
                            disabled={activeTab >= dataJson.length}>
                            <ChevronRightIcon className='w-5 h-5 -mr-2' />
                            <span>بعدی</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductSection;

import React, { useState, useEffect } from 'react';
import Header from '../repeater/Header';
import Float from '../repeater/Float';
import Footer from '../repeater/Footer';

function Educate({ dataJson }) {
    const MAX_LENGTH = 50;
    const ITEMS_PER_PAGE = 4;

    const [idImage, setIdImage] = useState(null); // تغییر مقدار اولیه به null
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const category = dataJson.find(item => item.name === "ربات و جوش لیزر");
        if (category) {
            setProducts(category.products);
            // Set initial idImage to a valid product ID if available
            if (category.products.length > 0) {
                setIdImage(category.products[0].id);
            }
        }
    }, [dataJson]);

    const handleSelected = (id) => {
        setIdImage(id);
    };

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const displayedvideos = products.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Find the currently selected product or use a default value
    const selectedProduct = products.find(p => p.id === idImage);
    const imageSrc = selectedProduct ? selectedProduct.src : "";
    const imageAlt = selectedProduct ? selectedProduct.title : "";

    return (
        <>
            <Header />
            <section id='educate' className='h-screen mt-20'>
                {/* header */}
                <div className='newest-header'>
                    <header className='flex gap-4 lg:gap-11 flex-col lg:flex-row items-center'>
                        <div className='newest-header-boximages'>
                            <img
                                className='lg:w-[528px] lg:h-[482px] h-[300px] object-cover bg-bgBox rounded-md'
                                src={imageSrc}
                                alt={imageAlt}
                            />
                            <div className='newest-header-images'>
                                {products.map(p => (
                                    <img
                                        className='w-[144px] h-[114px] fit-image bg-bgBox rounded-md'
                                        key={p.id}
                                        onClick={() => handleSelected(p.id)}
                                        src={p.src}
                                        alt={p.title}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='lg:w-[50%] lg:pl-20'>
                            <h1 className='h1 heading'>آموزش کار با جوش لیزر</h1>
                            <p className='subheading mt-11'>
                                {/* Your text */}
                            </p>
                        </div>
                    </header>
                </div>
                {/* description */}
                <div className='newest-description'>
                    {/* Your description */}
                </div>
                {/* introduce */}
                <div className='newest-introduce'>
                    <span className='text-3xl font-bold mb-11 inline-block'>ویدیو دستگاه های مرتبط</span>
                    <div className="content">
                        {displayedvideos.map((p) => (
                            <div className='box h-96' key={p.id}>
                                <div className='h-56 rounded-lg bg-bgBox'>
                                    <video className='fit-image' controls>
                                        <source src={p.srcFilm} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <h4 className='h4'>{p.title}</h4>
                                <span className='flex items-center gap-1.5'>
                                    <span className='box-circle hidden'></span>
                                    <span>{p.subtitle.length <= MAX_LENGTH ? p.subtitle : p.subtitle.slice(0, MAX_LENGTH) + "..."}</span>
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

export default Educate;

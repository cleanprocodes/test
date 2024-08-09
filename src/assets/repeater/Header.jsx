import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [isToggle, setIsToggle] = useState(false);
    const [isActive, setIsActive] = useState(null);
    const contactRef = useRef(null);

    const handleToggler = () => {
        setIsToggle(is => !is);
    };

    const handleActive = (x) => {
        setIsActive(x);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Check if the contact button is in view
            if (contactRef.current) {
                const rect = contactRef.current.getBoundingClientRect();
                const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
                setIsActive(isInView ? 7 : null);
                setIsToggle(false)
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className='header'>
            <div className={`menu-span ${isToggle ? "toggler" : ""}`} onClick={handleToggler}>
                <div className='span span1'></div>
                <div className='span span2'></div>
                <div className='span span3'></div>
            </div>
            <div className='header-logo'>
                <img className='logo' src="../../../src/assets/images/icons/logo.png" alt="logo" />
            </div>
            <nav className='header-navbar group'>
                <h3>
                    <a onFocus={() => handleActive(1)} className={`link ${isActive === 1 ? "active" : ""}`} href="#products">محصولات سخت افزاری</a>
                </h3>
                <h3>
                    <NavLink onFocus={() => handleActive(2)} className={`link ${isActive === 2 ? "active" : ""}`} to={"/newest"}>جدیدترین ها</NavLink>
                </h3>
                <h3>
                    <a onFocus={() => handleActive(3)} className={`link ${isActive === 3 ? "active" : ""}`} href="#manager">مدیریت</a>
                </h3>
                <h3>
                    <a onFocus={() => handleActive(4)} className={`link ${isActive === 4 ? "active" : ""}`} href="#cnc">ماشین سی ان سی</a>
                </h3>
                <h3>
                    <a onFocus={() => handleActive(5)} className={`link ${isActive === 5 ? "active" : ""}`} href="#services">خدمات ما</a>
                </h3>
                <h3>
                    <a onFocus={() => handleActive(6)} className={`link ${isActive === 6 ? "active" : ""}`} href="#connection">ارتباط با ما</a>
                </h3>
                <button onFocus={() => handleActive(7)} className={`btn btn--primary md:hidden`}>
                    <NavLink to={"/contact"}>تماس با ما</NavLink>
                </button>
            </nav>
            <button ref={contactRef} onFocus={() => handleActive(7)} className={`btn btn--primary hidden md:block`}>
                <NavLink to={"/contact"}>تماس با ما</NavLink>
            </button>
        </header>
    );
}

export default Header;

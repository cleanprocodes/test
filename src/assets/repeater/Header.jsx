import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
    const [isToggle, setIsToggle] = useState(false);
    const [isActive, setIsActive] = useState(null);
    const contactRef = useRef(null);
    const location = useLocation();

    const handleToggler = () => {
        setIsToggle(is => !is);
    };

    const handleActive = (x) => {
        setIsActive(x);
    };

    useEffect(() => {
        if (location.pathname === '/') { // Check if we are on the home page
            const handleScroll = () => {
                if (contactRef.current) {
                    const rect = contactRef.current.getBoundingClientRect();
                    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
                    setIsActive(isInView ? 7 : null);
                    setIsToggle(false);
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        } else {
            setIsActive(null); // Reset isActive state when not on the home page
        }
    }, [location]);

    return (
        <header className='header'>
            <div className={`menu-span ${isToggle ? "toggler" : ""}`} onClick={handleToggler}>
                <div className='span span1'></div>
                <div className='span span2'></div>
                <div className='span span3'></div>
            </div>
            <div className='header-logo'>
                <NavLink to={"/"}>
                    <img className='logo' src="../../../src/assets/images/icons/logo.png" alt="logo" />
                </NavLink>
            </div>
            <nav className='header-navbar group'>
                <h3>
                    <NavLink onFocus={() => handleActive(1)} className={`link ${isActive === 1 ? "active" : ""}`} to={"/educate"}>آموزش</NavLink>
                </h3>
                <h3>
                    {location.pathname === '/' ? (
                        <a onFocus={() => handleActive(2)} className={`link ${isActive === 2 ? "active" : ""}`} href="#productBox">محصولات سخت افزاری</a>
                    ) : (
                        <span className={`link ${isActive === 2 ? "active" : ""}`}>محصولات سخت افزاری</span>
                    )}
                </h3>
                <h3>
                    <NavLink onFocus={() => handleActive(3)} className={`link ${isActive === 3 ? "active" : ""}`} to={"/newest"}>جدیدترین ها</NavLink>
                </h3>
                <h3>
                    {location.pathname === '/' ? (
                        <a onFocus={() => handleActive(4)} className={`link ${isActive === 4 ? "active" : ""}`} href="#manager">مدیریت</a>
                    ) : (
                        <span className={`link ${isActive === 4 ? "active" : ""}`}>مدیریت</span>
                    )}
                </h3>
                <h3>
                    {location.pathname === '/' ? (
                        <a onFocus={() => handleActive(5)} className={`link ${isActive === 5 ? "active" : ""}`} href="#product">ماشین سی ان سی</a>
                    ) : (
                        <span className={`link ${isActive === 5 ? "active" : ""}`}>ماشین سی ان سی</span>
                    )}
                </h3>
                <h3>
                    {location.pathname === '/' ? (
                        <a onFocus={() => handleActive(6)} className={`link ${isActive === 6 ? "active" : ""}`} href="#services">خدمات ما</a>
                    ) : (
                        <span className={`link ${isActive === 6 ? "active" : ""}`}>خدمات ما</span>
                    )}
                </h3>
                <h3>
                    {location.pathname === '/' ? (
                        <a onFocus={() => handleActive(7)} className={`link ${isActive === 7 ? "active" : ""}`} href="#connection">ارتباط با ما</a>
                    ) : (
                        <span className={`link ${isActive === 7 ? "active" : ""}`}>ارتباط با ما</span>
                    )}
                </h3>
                <button className={`btn btn--primary md:hidden`}>
                    <NavLink to={"/contact"}>تماس با ما</NavLink>
                </button>
            </nav>
            <button ref={contactRef} className={`btn btn--primary hidden md:block`}>
                <NavLink to={"/contact"}>تماس با ما</NavLink>
            </button>
        </header>
    );
}

export default Header;

import { ArrowUpCircleIcon } from '@heroicons/react/20/solid'
import React from 'react'

function Float() {
  const smoothScrollToTop = () => {
    const duration = 700; // مدت زمان انیمیشن به میلی‌ثانیه
    const startTime = performance.now();
    const startTop = window.scrollY || document.documentElement.scrollTop;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const scroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime > duration) {
        window.scrollTo(0, 0);
        // Remove hash from URL
        window.location.hash = '';
        return;
      }
      const newTop = easeInOutQuad(elapsedTime, startTop, -startTop, duration);
      window.scrollTo(0, newTop);
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  };

  return (
    <button className='float' onClick={smoothScrollToTop}>
      <ArrowUpCircleIcon className='w-10 h-10 text-primary'/>
    </button>
  )
}

export default Float;

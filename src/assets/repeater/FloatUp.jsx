import { ArrowDownCircleIcon, ArrowDownIcon, ArrowLongDownIcon } from '@heroicons/react/20/solid';
import React from 'react';

function FloatUp() {
  const smoothScrollToLastSection = () => {
    const duration = 700; // مدت زمان انیمیشن به میلی‌ثانیه
    const startTime = performance.now();
    const startTop = window.scrollY || document.documentElement.scrollTop;

    // Target the last section by its ID
    const lastSection = document.getElementById('footer');
    if (!lastSection) return; // If the section doesn't exist, stop here

    const endTop = lastSection.getBoundingClientRect().top + startTop;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const scroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime > duration) {
        window.scrollTo(0, endTop);
        return;
      }
      const newTop = easeInOutQuad(elapsedTime, startTop, endTop - startTop, duration);
      window.scrollTo(0, newTop);
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  };

  return (
    <button className='floatup' onClick={smoothScrollToLastSection}>
      <ArrowLongDownIcon className='w-[80%] h-full'/>
    </button>
  );
}

export default FloatUp;

'use client';

import { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from '@/styles/components/ScrollToTop.module.scss';
import ScrollUpArrow from '@/svgs/ScrollUpArrow';

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    function scrollVisibility() {
      window.scrollY > window.innerHeight * 0.35
        ? setShowButton(true)
        : setShowButton(false);
    }

    window.addEventListener('scroll', scrollVisibility);

    return () => {
      window.removeEventListener('scroll', scrollVisibility);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <button
      id='scroll to the top'
      aria-label='scroll to the top'
      onClick={scrollToTop}
      className={cn(
        styles['scroll-btn'],
        showButton ? 'visibility-visible' : 'visibility-hidden'
      )}>
      <ScrollUpArrow />
    </button>
  );
}

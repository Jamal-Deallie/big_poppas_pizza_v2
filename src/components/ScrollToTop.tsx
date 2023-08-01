'use client';

import { useEffect, useState } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import cn from 'classnames';
import dynamic from 'next/dynamic';
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
  const lenis = useLenis((lenis: any) => lenis);

  function scrollToTop() {
    lenis.scrollTo('top');
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

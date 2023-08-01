'use client';

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import cn from 'classnames';
import useArrayRef from '@/hooks/useArrayRef';
import styles from '@/styles/components/FadeInCarousel.module.scss';
import Image from 'next/image';

interface IImageProps {
  id: number;
  src: string;
  alt: string;
}

type FadeInLoopProps = {
  data: IImageProps[];
};

export default function FadeInCarousel({ data }: FadeInLoopProps) {
  const [elements, setElements] = useArrayRef();
  const [buttons, setButtons] = useArrayRef();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number>(data.length - 1);
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useEffect(() => {
    function calculateIndexes() {
      setPrevIndex(currentIndex);
      if (currentIndex === data.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(() => {
          return currentIndex + 1;
        });
      }
    }
    gsap.set(elements.current[prevIndex], {
      opacity: 1,
    });

    gsap.set(buttons.current[prevIndex], {
      backgroundColor: '#000',
    });
    tl.current = gsap.timeline({ ease: 'sine.out' });
    tl.current
      .to(
        elements.current[prevIndex],
        { opacity: 0, duration: 2, delay: 2 },
        '<'
      )
      .to(elements.current[currentIndex], { opacity: 1, duration: 2 }, '<')
      .to(buttons.current[prevIndex], { backgroundColor: '#fff' }, '<')
      .to(buttons.current[currentIndex], { backgroundColor: '#000' }, '<')
      .addPause('+=0', calculateIndexes);
  }, [currentIndex, setCurrentIndex, setPrevIndex, tl, elements, prevIndex]);

  function toggleElement(indx: number) {
    tl.current.progress(1);
    setPrevIndex(currentIndex);
    setCurrentIndex(indx);
  }

  return (
    <div className='main-cont'>
      <div ref={root} className={cn(styles['reviews'], 'sm-mt-7 lg-mt-7')}>
        <div className={styles['wrapper']}>
          {data.map(({ src, alt, id }) => {
            return (
              <div className={cn(styles['review'])} key={id} ref={setElements}>
                <div className={styles['image']}>
                  <Image
                    priority
                    alt={alt}
                    src={src}
                    fill
                    sizes='(max-width: 1200px) 80vw'
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className={cn(styles['button-row'], 'sm-mt-2 lg-mt-2')}>
          {data.map(({ id }) => {
            return (
              <button
                id={`Toggle Review${id}`}
                aria-label={`Toggle Review${id}`}
                ref={setButtons}
                className={styles['button']}
                onClick={() => toggleElement(id)}
                key={id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

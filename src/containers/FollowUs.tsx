'use client';

import { useRef } from 'react';
import styles from '@/styles/containers/FollowUs.module.scss';
import cn from 'classnames';
import Border from '@/svgs/Border';
import Image from 'next/image';
import { ctaImages as images } from '@/data/data';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';

export default function FollowUs() {
  const tl = useRef<gsap.core.Timeline>(null!);
  const root = useRef(null!);

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia(root);
    mm.add(
      '(min-width: 850px)',
      () => {
        tl.current = gsap.timeline({
          scrollTrigger: {
            start: 'top center',
            end: 'bottom bottom',
            trigger: root.current,
          },
        });
        let images = gsap.utils.toArray('.img');
        tl.current
          .from(images, {
            duration: 1,
            opacity: 0,
            rotate: 0,
            y: 100,
            ease: 'sine.out',
            stagger: {
              amount: 0.3,
            },
          })
          .from(
            '.title-item',
            { scale: 0.7, opacity: 0, duration: 0.75 },
            '=-1'
          );
      },
      root
    );

    return () => mm.revert();
  }, []);

  return (
    <section className={cn('bg-tertiary', styles['follow-cont'])} ref={root}>
      <div className={styles['border-top']}>
        <Border />
      </div>

      <div className={cn('grid-block', styles['follow-cont'])}>
        {images.slice(0, 3).map(({ id, alt, src, cln }) => {
          return (
            <div className={cn(styles['img-cont'], 'img')} key={id}>
              <Image
                alt={alt}
                src={src}
                fill
                sizes='(max-width: 849) 100vw,(max-width: 1440px) 50vw, 33vw'
              />
            </div>
          );
        })}

        <div className={cn(styles['title-cont'], 'center title-item')}>
          <h1 className='title-lg border clr-primary mt-lg-32 mr-sm-16 split'>
            Follow Us
          </h1>
          <h2 className='title-md border clr-primary mb-lg-32 mr-sm-16 split'>
            @BigPoppas
          </h2>
        </div>
        {images.slice(3, 6).map(({ id, alt, src, cln }) => {
          return (
            <div className={cn(styles['img-cont'], 'img')} key={id}>
              <Image
                alt={alt}
                src={src}
                fill
                sizes='(max-width: 849) 100vw,(max-width: 1440px) 50vw, 33vw'
              />
            </div>
          );
        })}
      </div>

      <div className={styles['border-bottom']}>
        <Border />
      </div>
    </section>
  );
}

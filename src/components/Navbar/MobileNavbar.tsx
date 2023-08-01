'use client';

import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Reservation from '@/containers/Reservation';
import Menu from '@/components/MobileMenu';
import styles from '@/styles/components/MobileNavbar.module.scss';
import cn from 'classnames';
import Logo from '@/svgs/Logo';

export default function MobileNavbar() {
  gsap.registerPlugin(ScrollTrigger);
  const navbarRef = useRef(null!);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const showNav = gsap
        .fromTo(
          navbarRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.4,
          }
        )
        .progress(1);
      ScrollTrigger.create({
        start: 'top top',
        end: 'max',
        onUpdate: self => {
          self.direction === -1 ? showNav.play() : showNav.reverse();
        },
      });
    }, navbarRef); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert();
  }, []);

  return (
    <>
      <nav
        ref={navbarRef}
        className={cn('bg-secondary hide-desk', styles['navbar'])}>
        <div className={styles['inner']}>
          <div className='sm-ml-2'>
            <Menu />
          </div>

          <div className={cn(styles['logo'], 'center')}>
            <Logo />
          </div>
          <div className='sm-mr-2'>
            <Reservation as='icon' />
          </div>
        </div>
      </nav>
    </>
  );
}

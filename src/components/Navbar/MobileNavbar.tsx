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
  return (
    <>
      <nav className={cn('bg-secondary hide-desk', styles['navbar'])}>
        <div className={styles['inner']}>
          <div className='ml-sm-16'>
            <Menu />
          </div>

          <div className={cn(styles['logo'], 'center')}>
            <Logo />
          </div>
          <div className='mr-sm-16'>
            <Reservation as='icon' />
          </div>
        </div>
      </nav>
    </>
  );
}

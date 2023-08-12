'use client';

import Reservation from '@/containers/Reservation';
import Menu from '@/components/MobileMenu';
import styles from '@/styles/components/MobileNavbar.module.scss';
import cn from 'classnames';
import Logo from '@/svgs/Logo';
import Link from 'next/link';

export default function MobileNavbar() {
  return (
    <>
      <nav className={cn('bg-secondary hide-desk', styles['navbar'])}>
        <div className={styles['inner']}>
          <div className='ml-sm-16'>
            <Menu />
          </div>
          <Link
            href='/'
            aria-label='Big Poppas Pizza Logo. Click to navigate to home page'>
            <div className={cn(styles['logo'], 'center')}>
              <Logo />
            </div>
          </Link>
          <div className='mr-sm-16'>
            <Reservation as='icon' />
          </div>
        </div>
      </nav>
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavLink from '@/components/NavLink';
import Logo from '@/svgs/Logo';
import cn from 'classnames';
import Reservation from '@/containers/Reservation';
import styles from '@/styles/components/DesktopNavbar.module.scss';

import DesktopMenu from '@/components/DesktopMenu';
type Props = {};

export default function DesktopNavbar({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className={cn('bg-secondary hide-mobile', styles['container'])}>
        <div className={styles['wrap']}>
          <div className={styles['logo-wrap']}>
            <Link href='/'>
              <div className={styles['logo']}>
                <Logo />
              </div>
            </Link>
          </div>

          <div className={styles.links}>
            <div className={styles['link-wrap']}>
              <div>
                <NavLink href='/about' url='/about'>
                  About
                </NavLink>
              </div>
              <div
                className={styles['wrap-link']}
                onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}>
                <NavLink href='#' url='#'>
                  Menu
                </NavLink>
              </div>
              <div className={styles['wrap-link']}>
                <NavLink href='/visit' url='/visit'>
                  Visit
                </NavLink>
              </div>
              <div className={styles['wrap-link']}>
                <NavLink href='/faqs' url='/faqs'>
                  Faqs
                </NavLink>
              </div>
            </div>
          </div>
          <Reservation as={'icon'} />
        </div>
      </nav>
      <DesktopMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}

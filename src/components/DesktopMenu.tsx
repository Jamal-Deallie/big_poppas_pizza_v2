'use client';

import { useRef, useEffect, SetStateAction, Dispatch } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import cn from 'classnames';
import { deskMenuLinks as links } from '@/data/data';
import styles from '@/styles/components/DesktopMenu.module.scss';
import MenuLink from '@/components/MenuLink';

type MenuProps = {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
};
export default function DesktopMenu({ setIsMenuOpen, isMenuOpen }: MenuProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const root = useRef(null!);
  const bgRef = useRef(null!);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, searchParams]);

  const tl = useRef<gsap.core.Timeline | null>(null);

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline({ pause: true });

    let ctx = gsap.context(() => {
      gsap.set(root.current, { opacity: 0 });
      if (tl.current) {
        tl.current
          .to(
            root.current,

            {
              duration: 0.75,
              opacity: 1,
              y: 0,
              display: 'block',
              ease: 'power3.inOut',
            }
          )
          .to(
            bgRef.current,
            {
              duration: 0.75,
              opacity: 1,
              y: 0,
              display: 'block',
              ease: 'power3.inOut',
            },
            '-=0.5'
          )
          .reverse();
      }
    }, root);

    return () => ctx.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (tl.current) {
      tl.current.reversed(!isMenuOpen);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tl, isMenuOpen]);

  return (
    <>
      <div className={cn(styles.menu, 'bg-secondary hide-mobile')} ref={root}>
        <div className='grid-inner'>
          <div className={styles['links']}>
            <ul className='pt-lg-96 sm-pt-12'>
              {links.map(({ id, ...links }) => {
                return (
                  <li id='link' key={id}>
                    <MenuLink {...links} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div
        className={cn(styles['bg'], 'mobile-hide')}
        onClick={() => setIsMenuOpen(isMenuOpen => false)}
        ref={bgRef}></div>
    </>
  );
}

'use client';

import { useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import { usePathname, useSearchParams } from 'next/navigation';
import { menuLinks } from '@/data/linkItems';
import { LinkAccordion } from './LinkAccordion';
import cn from 'classnames';
import Link from 'next/link';
import useLockedBody from '@/hooks/useLockedBody';
import styles from '@/styles/components/Menu.module.scss';

export default function Menus() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const root = useRef(null!);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [locked, setLocked] = useLockedBody(false, 'root');

  const openNav = () => {
    setNavIsOpen(!navIsOpen);
    setLocked(!locked);
  };

  useIsomorphicLayoutEffect(() => {
    setNavIsOpen(false);
    setLocked(false);
  }, [pathname, searchParams]);

  const tl = useRef<gsap.core.Timeline | null>(null);

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline({ pause: true });
    let links = gsap.utils.toArray('.link-item');

    let ctx = gsap.context(() => {
      if (tl.current) {
        tl.current
          .fromTo(
            root.current,
            { autoAlpha: 0, yPercent: 200 },
            {
              duration: 1,
              autoAlpha: 1,
              yPercent: 0,
              display: 'block',
              ease: 'power3.inOut',
            }
          )
          .fromTo(
            links,
            { autoAlpha: 0, yPercent: 200 },
            {
              duration: 0.65,
              yPercent: 0,
              autoAlpha: 1,
              stagger: {
                amount: 0.3,
              },
            }
          )
          .reverse();
      }
    }, root);

    return () => ctx.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (tl.current) {
      tl.current.reversed(!navIsOpen);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tl, navIsOpen]);

  return (
    <>
      <div className={styles['btn-cont']}>
        <div
          role='button'
          onClick={openNav}
          className={cn('title-sm btn-item', styles['btn'])}>
          Menu
        </div>
      </div>

      <div className={styles.menu} ref={root}>
        <div className='grid-inner'>
          <div className={styles['link-cont']}>
            <ul className='pt-sm-128'>
              <li className='link-item'>
                <Link className={styles['link']} href='/about'>
                  About
                </Link>
              </li>
              <li className='link-item'>
                <LinkAccordion title='menu' menuLinks={menuLinks} />
              </li>
              <li className='link-item'>
                <Link className={styles['link']} href='/visit'>
                  Visit
                </Link>
              </li>
              <li className='link-item'>
                <Link className={styles['link']} href='/faqs'>
                  Faqs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

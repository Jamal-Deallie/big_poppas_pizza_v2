'use client';
import { memo, useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import cn from 'classnames';
import styles from '@/styles/components/LinkAccordion.module.scss';
import { useStore } from '@/lib/store';
import ArrowForward from '@/svgs/ArrowForward';
import NavLink from './NavLink';

interface ILinks {
  id: number;
  path: string;
  label: string;
}

function LinkAccordionComponent({
  title,
  menuLinks,
}: {
  title: string;
  menuLinks: Array<ILinks>;
}) {
  const [showAccordion, setShowAccordion] = useState<boolean>(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  function toggleAccordion() {
    setShowAccordion(showAccordion => !showAccordion);
  }
  const navIsOpen = useStore(state => state.navIsOpen);

  useEffect(() => {
    if (!navIsOpen) {
      setShowAccordion(false);
    }
  }, [setShowAccordion, navIsOpen]);

  useEffect(() => {
    setShowAccordion(false);
  }, [pathname, searchParams]);
  return (
    <>
      <button className={styles['accordion-trigger']} onClick={toggleAccordion}>
        <p className={styles['link']}>{title}</p>
        <div
          className={cn(
            styles['arrow'],
            showAccordion ? styles['rotate'] : null
          )}>
          <ArrowForward />
        </div>
      </button>

      <div
        className={cn(
          styles['accordion-content'],
          showAccordion ? styles['content-show'] : styles['content-hide']
        )}>
        <div
          className={cn(
            'bg-secondary',
            styles['link-cont'],
            showAccordion ? styles['active'] : null
          )}>
          {menuLinks.map(({ id, path, label }) => {
            return (
              <NavLink href={path} url={path} key={id}>
                {label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}

export const LinkAccordion = memo(LinkAccordionComponent);

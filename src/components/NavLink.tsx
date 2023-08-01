'use client';

import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import styles from '@/styles/components/NavLinks.module.scss';

type NavLinkProps = LinkProps & {
  children: ReactNode;
  url: string;
  key?: string | number;
  cln?: string;
};

export default function NavLink({
  cln,
  children,
  url,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();

  return (
    <div className={styles['link-cont']}>
      <Link
        passHref
        {...props}
        className={cn(
          [styles.link],
          pathname === url ? [styles.active] : null,
          cln
        )}>
        <span>{children}</span>
        <svg height={18} className={styles['graphic']} viewBox='0 0 59 18'>
          <path
            d='M.945.149C12.3 16.142 43.573 22.572 58.785 10.842'
            pathLength={1}
          />
        </svg>
      </Link>
    </div>
  );
}

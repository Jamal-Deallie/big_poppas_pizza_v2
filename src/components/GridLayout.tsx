import { ReactNode } from 'react';
import cn from 'classnames';
import styles from '@/styles/components/GridLayout.module.scss';

interface LayoutProps {
  title?: string;
  titleCn?: string;
  layoutCn?: string;
  children?: ReactNode;
}

export default function GridLayout({
  title,
  children,
  layoutCn,
  titleCn,
}: LayoutProps) {
  return (
    <div className={layoutCn}>
      {/* {title ? (
        <div className={styles['title']}>
          <h1 className={titleCn}>{title}</h1>
        </div>
      ) : null} */}

      <div className={cn(styles['layout'], 'grid-inner' )}>{children}</div>
    </div>
  );
}

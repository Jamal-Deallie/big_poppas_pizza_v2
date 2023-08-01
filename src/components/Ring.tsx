import { CSSProperties } from 'react';
import styles from '@/styles/components/Ring.module.scss';

export default function Ring({
  size = 48,
  color = '#000',
  lineWeight = 4,
  speed = 2,
}: {
  size?: number;
  color?: string;
  lineWeight?: number;
  speed?: number;
}) {
  return (
    <svg
      height={size}
      width={size}
      className={styles.container}
      viewBox='25 25 50 50'
      style={
        {
          '--uib-size': size + 'px',
          '--uib-color': color,
          '--uib-speed': speed + 's',
        } as CSSProperties
      }>
      <circle cx='50' cy='50' r='20' strokeWidth={lineWeight} fill='none' />
    </svg>
  );
}

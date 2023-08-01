import { CSSProperties } from 'react';
import styles from '@/styles/components/Loading.module.scss';

export interface ILoading extends CSSProperties {
  border: string;
}

export default function Loading({ border }: ILoading) {
  return (
    <div
      className={styles['loading']}
      style={
        {
          '--border': border,
        } as CSSProperties
      }>
      <div></div>
      <div></div>
    </div>
  );
}

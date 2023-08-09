import { CSSProperties } from 'react';
import styles from '@/styles/components/Loading.module.scss';
import cn from 'classnames';
export interface ILoading extends CSSProperties {
  border: string;
}

export default function Loading({ border }: ILoading) {
  return (
    <div
      className={cn(styles['loading'], 'm-lg-auto m-sm-auto')}
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

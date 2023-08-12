'use client';

import styles from '@/styles/containers/Marquee.module.scss';
import { MarqueeText } from '@/components/MarqueeText';
import cn from 'classnames';
import SmileyFace from '@/svgs/SmileyFace';

function Text() {
  return (
    <div className={cn(styles['text-flex'])}>
      <div className={cn(styles['smiley-face'], 'rotate')}>
        <SmileyFace />
      </div>
      <span>Postmates</span>
      <div className={cn(styles['smiley-face'], 'rotate')}>
        <SmileyFace />
      </div>
      <span>Uber Eats</span>
      <div className={cn(styles['smiley-face'], 'rotate')}>
        <SmileyFace />
      </div>
      <span>Doordash</span>
      <div className={cn(styles['smiley-face'], 'rotate')}>
        <SmileyFace />
      </div>
      <span>Grubhub</span>
    </div>
  );
}
export default function Marquee({
  repeat,
  reverse,
}: {
  repeat: number;
  reverse?: boolean;
}) {
  return (
    <MarqueeText reverse={reverse}>
      <div className={styles['text-marquee']}>
        <div className={cn(styles['text-single'], 'txt-wrapper')}>
          <span className={cn(styles['text'], 'scroll-txt')}>
            <Text />
          </span>
          <span className={cn(styles['text'], 'scroll-txt')}>
            <Text />
          </span>
        </div>
      </div>
    </MarqueeText>
  );
}

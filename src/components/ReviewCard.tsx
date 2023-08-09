import dynamic from 'next/dynamic';
import Image from 'next/image';
import cn from 'classnames';
import styles from '@/styles/components/Review.module.scss';
import FiveStars from '@/svgs/FiveStars';
type ReviewProps = {
  review: string;
  name: string;
};

export default function Review({ name, review }: ReviewProps) {
  return (
    <div className={cn(styles['review'], 'loop-target')}>
      <div className={cn(styles['outer'], 'bg-secondary')}>
        <div className={styles['inner']}>
          <div className={styles['content']}>
            <div className={styles['stars']}>
              <FiveStars />
            </div>
            <div className='clr-tertiary'>
              <p className='mt-sm-16 mt-lg-24 txt-md'>{review}</p>
              <p className='title-sm mt-sm-16 mt-lg-16'>{`- ${name}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

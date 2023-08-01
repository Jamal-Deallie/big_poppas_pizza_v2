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
            <div className={cn(styles['stars'], 'sm-mt-1 lg-mt-1')}>
              <FiveStars />
            </div>
            <div className='clr-tertiary'>
              <p className='sm-mt-1 lg-mt-1 txt-md'>{review}</p>
              <p className='title-sm sm-mt-2 lg-mt-2'>{`- ${name}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

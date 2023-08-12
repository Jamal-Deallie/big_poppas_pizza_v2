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
              <Image
                src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1691819465/big_poppas/iconly_svg_optimized-optimized_q25qm0.svg'
                fill
                alt='five stars'
                sizes='(min-width: 850px) 10vw, 8vw, (max-width: 849px) 50vw'
              />
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

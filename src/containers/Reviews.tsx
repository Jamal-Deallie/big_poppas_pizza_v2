'use client';

import Review from '@/components/ReviewCard';
import MarqueeLoop from '@/components/MarqueeLoop';
import { reviewItems } from '@/data/reviewItems';
import cn from 'classnames';
import styles from '@/styles/containers/Reviews.module.scss';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Reviews() {
  const matches = useMediaQuery('(min-width: 801px)');

  return (
    <section className={cn('secondary-theme', styles['reviews'])}>
    <div className='py-sm-64 py-lg-128'>
        <div className='main-cont'>
          <div className={styles['title-cont']}>
            <h1 className='title-lg tac'>The Reviews Are In</h1>
          </div>
          {matches ? (
            <div className='mt-sm-64 mt-lg-96'>
              <div>
                <MarqueeLoop>
                  <div className='marquee'>
                    <div className='loop-item'>
                      {reviewItems.slice(0, 7).map(({ id, name, review }) => (
                        <Review name={name} review={review} key={id} />
                      ))}
                    </div>
                  </div>
                </MarqueeLoop>
              </div>
              <div>
                <MarqueeLoop reverse={true}>
                  <div className='marquee'>
                    <div className='loop-item'>
                      {reviewItems.slice(7, 14).map(({ id, name, review }) => (
                        <Review name={name} review={review} key={id} />
                      ))}
                    </div>
                  </div>
                </MarqueeLoop>
              </div>
            </div>
          ) : (
            <div className='loop-item mt-sm-64 mt-lg-96'>
              {reviewItems.slice(0, 3).map(({ id, name, review }) => (
                <Review name={name} review={review} key={id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

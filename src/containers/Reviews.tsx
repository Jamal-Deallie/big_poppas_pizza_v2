'use client';

import Review from '@/components/ReviewCard';
import MarqueeLoop from '@/components/MarqueeLoop';
import { reviewItems } from '@/data/reviewItems';
import cn from 'classnames';
import styles from '@/styles/containers/Reviews.module.scss';
import { IsDesktop, IsTablet } from '@/components/MediaQuery';

export default function Reviews() {
  return (
    <section className={cn('secondary-theme', styles['reviews'])}>
      <div className='py-sm-64 py-lg-128'>
        <div>
          <div className={cn(styles['title-cont'], 'main-cont')}>
            <h1 className='title-lg tac'>The Reviews Are In</h1>
          </div>
          <IsDesktop>
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
          </IsDesktop>
          <IsTablet>
            <div className='main-cont mt-sm-64 mt-lg-96'>
              {reviewItems.slice(0, 3).map(({ id, name, review }) => (
                <Review name={name} review={review} key={id} />
              ))}
            </div>
          </IsTablet>
        </div>
      </div>
    </section>
  );
}

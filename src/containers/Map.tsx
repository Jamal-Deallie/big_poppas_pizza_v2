import React from 'react';
import styles from '@/styles/containers/Map.module.scss';
import dynamic from 'next/dynamic';
import cn from 'classnames';

const DynamicMap = dynamic(() => import('@/components/Map'), {
  ssr: false,
});

export default function Map() {
  return (
    <section className='tertiary-theme'>
         <div className='py-sm-64 py-lg-128'>
        <div className='grid-inner'>
          <div className={cn(styles['content'], 'desc')}>
            <h1 className='title-lg border'>Visit Now</h1>
            <p className='txt-md mt-lg-40 mt-sm-32'>
              Whether you're seeking a cozy dinner with friends, a family
              gathering, or a quick lunchtime escape, Big Poppas Pizza
              guarantees an unforgettable experience. So, come join us and
              become a part of our pizza-loving community
            </p>
            <p className='txt-md mt-sm-8 mt-lg-24'>
              159 Carlton Ave <br /> Brooklyn, NY 11205
            </p>
            <p className='txt-md'>(123) 444-5555</p>
            <p className='txt-md mt-sm-8 mt-lg-24'>
              Open Daily, from 11:00 AM - 10:00 PM
            </p>
          </div>

          <div className={styles['map-cont']}>
            <div className={styles['map-inner']}>
              <DynamicMap
                latitude={40.692829}
                longitude={-73.972458}
                zoom={13}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

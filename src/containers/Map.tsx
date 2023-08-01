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
         <div className='sm-py-7 lg-py-16'>
        <div className='grid-inner'>
          <div className={cn(styles['content'], 'desc')}>
            <h1 className='title-lg border'>Visit Now</h1>
            <p className='txt-md lg-mt-5 sm-mt-4'>
              Whether you're seeking a cozy dinner with friends, a family
              gathering, or a quick lunchtime escape, Big Poppas Pizza
              guarantees an unforgettable experience. So, come join us and
              become a part of our pizza-loving community
            </p>
            <p className='txt-md sm-mt-1 lg-mt-2'>
              159 Carlton Ave <br /> Brooklyn, NY 11205
            </p>
            <p className='txt-md'>(123) 444-5555</p>
            <p className='txt-md sm-mt-1 lg-mt-2'>
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

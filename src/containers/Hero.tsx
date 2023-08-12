import Image from 'next/image';
import styles from '@/styles/containers/Hero.module.scss';
import cn from 'classnames';
import Reservation from '@/containers/Reservation';
import Accent from '@/svgs/Accent';
import UnderlineAccent from '@/svgs/UnderlineAccent';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

export default function Hero() {
  return (
    <section className={cn('bg-secondary', styles['hero'])}>
      <div className={cn(styles['inner'], 'bg-secondary')}>
        <div className={styles['img']}>
          <Image
            src='/image/hero_gnbmxh.webp'
            alt='Hero'
            fill
            quality={90}
            sizes='(min-width: 850px) 75vw, 100vw, (max-width: 849px) 33vw'
            priority={true}
          />
        </div>
        <div className={styles['cta']}>
          <div className={styles['inner']}>
            <div className={styles['title']}>
              <div className={styles['accent-svg']}>
                <Accent />
              </div>
              <h1 className='title-heading clr-primary border'>
                We Love The Dough
              </h1>
              <div className={styles['underline-svg']}>
                <UnderlineAccent />
              </div>
            </div>
            <div className={cn(styles['desc'], 'hide-mobile mt-lg-48')}>
              <p className='txt-lg'>
                Immerse yourself in the world of the Notorious B.I.G at Big
                {` Poppa's`} Pizzeria, where the pizzas are always juicy and the
                flavors are notorious.
              </p>
            </div>
            <div className={cn(styles['btn-cont'], 'mt-sm-32 mt-lg-32')}>
              <Reservation as='button' variant='primary' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import styles from '@/styles/containers/Hero.module.scss';
import cn from 'classnames';
import Reservation from '@/containers/Reservation';

export default function Hero() {
  return (
    <section className={cn('bg-secondary', styles['hero'])}>
      <div className={cn(styles['inner'], 'bg-secondary')}>
        <div className={styles['img']}>
          <Image
            src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002423/big_poppas/hero_gnbmxh.webp'
            alt='Hero'
            fill
            quality={100}
            sizes='(max-width: 1300px) 75vw, 100vw, (max-width: 800px) 100vw'
            priority
            loading='eager'
          />
        </div>
        <div className={styles['cta']}>
          <div className={styles['inner']}>
            <div className={styles['title']}>
              <h1 className={styles['hero-title']}>
                <span className={styles['accent']}>We</span> Love
              </h1>
              <h1 className={styles['hero-title']}>
                The <span className={styles['underline']}>Dough</span>
              </h1>
            </div>
            <div className={cn(styles['desc'], 'hide-mobile')}>
              <p className='txt-lg'>
                Immerse yourself in the world of the Notorious B.I.G at Big
                {` Poppa's`} Pizzeria, where the pizzas are always juicy and the
                flavors are notorious.
              </p>
            </div>
            <div className={styles['btn-cont']}>
              <Reservation as='button' variant='primary' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

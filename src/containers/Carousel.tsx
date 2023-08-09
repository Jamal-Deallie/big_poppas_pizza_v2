'use client';

import styles from '@/styles/containers/Carousel.module.scss';
import FadeInCarousel from '@/components/FadeInCarousel';
import { slideItems } from '@/data/slideItems';
import cn from 'classnames';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';
type Props = {};

export default function Carousel({}: Props) {
  const matches = useMediaQuery('(max-width: 849px)');
  return (
    <section className='primary-theme'>
   <div className='py-sm-64 py-lg-128 '>
        <div className='grid-inner'>
          <div className={styles['title-cont']}>
            <h1 className='title-lg'>Same Number Same Hood</h1>
            <div className={styles['desc-cont']}>
              <p className='txt-md'>
                With a vibrant atmosphere and exceptional service, Big Poppas
                Pizza, inspired by the legendary Notorious B.I.G., offers a
                memorable dining experience that will leave you craving more.
              </p>
            </div>
          </div>
          <div className={styles['carousel']}>
            {matches ? (
              <div className={cn(styles['image'], 'mt-sm-64 mt-lg-40')}>
                <Image
                  priority
                  src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1689143083/big_poppas/jonathan-borba-LBsh3JyBvu4-unsplash_1_afyakh.webp'
                  alt='Big Poppas Pizzeria'
                  fill
                  sizes='(max-width: 849px), 100vw'
                />
              </div>
            ) : (
              <FadeInCarousel data={slideItems} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

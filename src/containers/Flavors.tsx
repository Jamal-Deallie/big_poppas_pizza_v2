import React from 'react';
import styles from '@/styles/containers/Flavors.module.scss';
import Image from 'next/image';
import DoodleArrow from '@/svgs/DoodleArrow';
import RandomDoodle from '@/svgs/RandomDoodle';
import cn from 'classnames';

export default function Flavors() {
  return (
    <div className={cn(styles['flavors-cont'], 'tertiary-theme')}>
      <div className='lg-pt-16 sm-pt-7'>
        <div className='grid-block'>
          <aside className={styles['title-cont']}>
            <h1 className='title-lg border'>NOTORIOUS FLAVORS</h1>
            <div className={styles['arrow-doodle']}>
              <DoodleArrow />
            </div>
            <p className='txt-md mt-lg-24 mt-sm-16 sm-tac'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </aside>
          <div className={cn(styles['random-doodle'], 'hide-mobile')}>
            <RandomDoodle />
          </div>
          <div className={styles['img-cont']}>
            <Image
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1689538089/big_poppas/flavors_inthc4.webp'
              alt='Big Poppas Pizza'
              fill
              sizes='(max-width: 849) 100vw,(max-width: 1440px) 50vw, 33vw'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

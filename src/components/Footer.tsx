'use client';

import Link from 'next/link';
import EmailForm from '@/components/EmailForm';
import { links, support } from '../data/data';
import styles from '@/styles/components/Footer.module.scss';
import cn from 'classnames';
import Instagram from '@/svgs/Instagram';
import Facebook from '@/svgs/Facebook';
import Twitter from '@/svgs/Instagram';
type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className={cn(styles['footer'], 'bg-secondary')}>
      <div className='grid-cont'>
        <div className={styles['desc']}>
          <EmailForm
            title={'Subscribe for the latest deals'}
            desc='Unlock Pizza Bliss: Sign Up for Big Poppas Pizza Deals Today!'
          />
        </div>
        <div className={styles['links']}>
          <div className={styles['link-wrap']}>
            <h2 className='clr-tertiary title-xs'>Links</h2>
            <ul className='mt-sm-16 mt-lg-16'>
              {links.map(({ id, path, label }) => {
                return (
                  <li key={id} className='clr-tertiary'>
                    <Link href={path} className='txt-md'>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles['link-wrap']}>
            <h2 className='clr-tertiary title-xs'>Visit</h2>
            <ul className='mt-sm-24 mt-lg-24'>
              <li className='clr-tertiary'>
                <p className='txt-md'>
                  129 Carlton Avenue
                  <br />
                  Brooklyn, NY, 11205
                </p>
              </li>
              <li className='clr-tertiary'>
                <p className='txt-md'>
                  Hours: <br />
                  Daily 11am - 10:00pm
                </p>
              </li>
              <li className='clr-tertiary'>
                <p className='txt-md'>info@bigpoppas.com</p>
              </li>
              <li className='clr-tertiary'>
                <p className='txt-md'>123-123-4567</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles['footer-bottom']}>
        <div className={styles['support']}>
          {support.map(({ id, path, label }) => {
            return (
              <div key={id} className='clr-tertiary'>
                <Link href={path}>{label}</Link>
              </div>
            );
          })}
        </div>
        <div className={styles['icons']}>
          <div>
            <Instagram />
          </div>
          <Facebook />
          <Twitter />
        </div>
      </div>
    </footer>
  );
}

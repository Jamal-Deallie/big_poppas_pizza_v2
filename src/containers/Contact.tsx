import React from 'react';
import styles from '@/styles/containers/Contact.module.scss';
import Form from '@/components/ContactForm';
import cn from 'classNames';
type Props = {};

export default function index({}: Props) {
  return (
    <section className='primary-theme'>
      <div className='lg-py-16 sm-py-7'>
        <div className={styles['contact']}>
          <div className='grid-inner'>
            <div className={styles['title-cont']}>
              <h1 className='title-lg'>Any</h1>
              <h1 className='title-lg'>Questions?</h1>
            </div>

            <div className={cn(styles['form-wrap'], 'lg-mt-7 sm-mt-5')}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

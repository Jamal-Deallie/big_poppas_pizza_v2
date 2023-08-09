import React from 'react';
import styles from '@/styles/containers/Contact.module.scss';
import Form from '@/components/ContactForm';
import cn from 'classnames';
type Props = {};

export default function index({}: Props) {
  return (
    <section className='primary-theme'>
      <div className='py-sm-64 py-lg-128'>
        <div className={styles['contact']}>
          <div className='grid-inner'>
            <div className={styles['title-cont']}>
              <h1 className='title-lg'>Any</h1>
              <h1 className='title-lg'>Questions?</h1>
            </div>

            <div className={cn(styles['form-wrap'], 'mt-lg-64 mt-sm-40')}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

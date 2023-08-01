'use client';

import { useState, SyntheticEvent, memo } from 'react';
import cn from 'classnames';
import styles from '@/styles/components/EmailForm.module.scss';

function EmailForm({ title, desc }: { title: string; desc: string }) {
  const [email, setEmail] = useState('');

  const onInputSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    alert(`The email you entered was: ${email}`);
  };

  return (
    <div className={styles['form']}>
      <h1 className='clr-tertiary title-xs'>{title}</h1>
      <div>
        <p className='txt sm-my-1 lg-my-1 clr-tertiary'>{desc}</p>
      </div>
      <form className={cn(styles['email-input'], 'sm-mt-2 lg-mt-2')}>
        <input
          type='email'
          placeholder='Enter your email address'
          name='email'
          autoComplete='one-time-code'
        />
        <button
          type='submit'
          aria-label='Submit your email address'
          id='Submit your email address'>
          <span className='clr-tertiary'>&#8594;</span>
        </button>
      </form>
    </div>
  );
}

export default memo(EmailForm);

'use client';

import { Input } from '@/components/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import cn from 'classnames';
import { z } from 'zod';
import styles from '@/styles/components/Form.module.scss';

type FormProps = {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
};

const contactSchema = z
  .object({
    name: z.string(),
    phoneNumber: z.string().min(10),
    email: z.string().email({ message: 'The email is invalid.' }),
    message: z.string().min(10),
  })
  .required();

type ContactType = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitted, isDirty, isValid },
  } = useForm<ContactType>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<FormProps> = data => {
    fetch('/api/email', {
      method: 'post',
      body: JSON.stringify(data),
    });
    reset();
  };

  return (
    <form
      method='post'
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}>
      <div>
        <div className={styles.input}>
          <Input type='text' placeholder='Name' {...register('name')} />
        </div>
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>
      <div>
        <div className={styles.input}>
          <Input
            type='text'
            placeholder='Phone Number'
            {...register('phoneNumber')}
          />
        </div>
        {errors.phoneNumber && (
          <p className={styles.error}>{errors.phoneNumber.message}</p>
        )}
      </div>
      <div>
        <div className={styles.input}>
          <Input type='email' placeholder='Email' {...register('email')} />
        </div>
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>
      <div>
        <div className={styles.input}>
          <textarea placeholder='Message' {...register('message')} />
        </div>
        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}
      </div>
      <input type='button' value='Submit' className={cn(styles['btn'])} />
    </form>
  );
}

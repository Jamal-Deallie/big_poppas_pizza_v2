'use client';

import { Controller, useForm } from 'react-hook-form';
import { Button } from '@/components/Button/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { FieldError } from 'react-hook-form';
import { Input } from '@/components/Input';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '@/styles/components/ReservationForm.module.scss';
import cn from 'classnames';

const formatErrors = (errors: Record<string, FieldError>) =>
  Object.keys(errors).map(key => ({
    key,
    message: errors[key].message,
  }));

/* ---------- Some UI components ----------*/

type AlertType = 'error' | 'warning' | 'success';

// Global Alert div.
const Alert = ({ children, type }: { children: string; type: AlertType }) => {
  const backgroundColor =
    type === 'error' ? 'tomato' : type === 'warning' ? 'orange' : 'powderBlue';

  return <div className={styles['error']}>{children}</div>;
};

// Use role="alert" to announce the error message.
const AlertInput = ({ children }: { children: React.ReactNode }) =>
  Boolean(children) ? (
    <span role='alert' style={{ color: 'tomato' }}>
      {children}
    </span>
  ) : null;

/* ---------- Zod schema et TS type ----------*/

const times = [
  { id: 1, value: '11:00 AM', label: '11:00 AM', available: true },
  { id: 2, value: '12:00 PM', label: '12:00 PM', available: true },
  { id: 3, value: '1:00 PM', label: '1:00 PM', available: true },
  { id: 4, value: '2:00 PM', label: '2:00 PM', available: true },
  { id: 5, value: '3:00 PM', label: '3:00 PM', available: true },
  { id: 6, value: '4:00 PM', label: '4:00 PM', available: true },
  { id: 7, value: '5:00 PM', label: '5:00 PM', available: true },
  { id: 8, value: '6:00 PM', label: '6:00 PM', available: true },
  { id: 9, value: '7:00 PM', label: '7:00 PM', available: true },
  { id: 10, value: '8:00 PM', label: '8:00 PM', available: true },
  { id: 11, value: '9:00 PM', label: '9:00 PM', available: true },
] as const;

// Describe the correctness of data's form.
const formSchema = z.object({
  firstName: z.string().max(36),
  lastName: z.string().min(1, { message: 'The lastName is required.' }).max(36),
  phoneNumber: z
    .string()
    .min(10, { message: 'Phone Number Invalid.' })
    .max(13, { message: 'Phone Number Invalid.' }),
  email: z
    .string()
    .min(1, 'The email is required.')
    .email({ message: 'The email is invalid.' }),

  date: z.date({
    required_error: 'Please select a date',
    invalid_type_error: "That's not a date!",
  }),
  time: z.string({ required_error: 'The Time is required' }).min(1),
  partySize: z.union([z.number().int().positive().min(1).max(8), z.nan()]),
});

// Infer the TS type according to the zod schema.
type FormType = z.infer<typeof formSchema>;

/* ---------- React component ----------*/

export default function ReservationForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting, isSubmitted, isDirty, isValid },
  } = useForm<FormType>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: FormType) => {
    console.log('onSubmit', values);

    const response = await fetch(`/api/reservations`, {
      method: 'POST',
      body: JSON.stringify(values),
    });

    const data = await response.json();
  };

  const today = new Date();

  return (
    <div className={styles['form-cont']}>
      {Boolean(Object.keys(errors)?.length) && (
        <Alert type='error'>There are errors in the form.</Alert>
      )}

      <form
        className={styles['grid-cont']}
        onSubmit={handleSubmit(onSubmit)}
        noValidate>
        <div className={cn(styles['fields'], 'mt-sm-8 mt-lg-16')}>
          <label htmlFor='firstName_field'>First Name</label>
          <Input
            autoComplete='one-time-code'
            id='firstName_field'
            type='text'
            {...register('firstName')}
            aria-invalid={Boolean(errors.firstName)}
          />
          <AlertInput>{errors?.firstName?.message}</AlertInput>
        </div>

        <div className='mt-sm-8 mt-lg-16'>
          <label htmlFor='lastName_field'>Last Name</label>
          <Input
            autoComplete='one-time-code'
            id='lastName_field'
            type='text'
            {...register('lastName')}
            aria-invalid={Boolean(errors.lastName)}
          />
          <AlertInput>{errors?.lastName?.message}</AlertInput>
        </div>

        <div className={cn(styles['fields'], 'mt-sm-8 mt-lg-16')}>
          <label className={styles['label']} htmlFor='email_field'>
            Email
          </label>
          <Input
            autoComplete='one-time-code'
            id='email_field'
            type='email'
            {...register('email')}
            aria-invalid={Boolean(errors.email)}
          />
          <AlertInput>{errors?.email?.message}</AlertInput>
        </div>

        <div className={cn(styles['fields'], 'mt-sm-8 mt-lg-16')}>
          <label className={styles['label']} htmlFor='phone_field'>
            Phone Number
          </label>
          <Input
            autoComplete='one-time-code'
            id='phone_field'
            type='tel'
            {...register('phoneNumber')}
            aria-invalid={Boolean(errors.phoneNumber)}
          />
          <AlertInput>{errors?.phoneNumber?.message}</AlertInput>
        </div>

        <div className={cn(styles['fields'], 'mt-sm-8 mt-lg-16')}>
          <label className={styles['label']} htmlFor='party_field'>
            Number of Guest
          </label>
          <Input
            autoComplete='one-time-code'
            id='party_field'
            type='number'
            min={1}
            max={8}
            {...register('partySize', { valueAsNumber: true })}
            aria-invalid={Boolean(errors.partySize)}
          />
          <AlertInput>{errors?.partySize?.message}</AlertInput>
        </div>
        <div className={cn(styles['fields'], 'mt-sm-8 mt-lg-16')}>
          <label htmlFor='date_field'>Date</label>
          <Controller
            control={control}
            name='date'
            render={({ field: { value, ...fieldProps } }) => {
              return (
                //@ts-ignore
                <DatePicker
                  autoComplete='one-time-code'
                  id='date_field'
                  {...fieldProps}
                  className='input'
                  selected={value}
                  minDate={today}
                  todayButton={'Today'}
                />
              );
            }}
          />
          <AlertInput>{errors?.date?.message}</AlertInput>
        </div>

        <div className={cn(styles['radios'], 'mt-sm-8 mt-lg-16')}>
          <span className={styles['label']}>Time</span>

          <div className={styles['radio-group']}>
            {times.map(({ value, id }) => {
              return (
                <div key={id} className={styles['radio-cont']}>
                  <input
                    type='radio'
                    value={value}
                    id={value}
                    {...register('time', { required: true })}
                  />
                  <span>{value}</span>
                </div>
              );
            })}
          </div>
          <AlertInput>{errors?.date?.message}</AlertInput>
        </div>

        <Button
          type='submit'
          disabled={isSubmitting || !isValid}
          variant='primary'
          size='lg'
          classes='mt-lg-32 mt-sm-16 full-w'>
          Submit
        </Button>
        {/* <pre>{JSON.stringify(formatErrors, null, 2)}</pre>
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
        <pre>
          formState ={' '}
          {JSON.stringify(
            { isSubmitting, isSubmitted, isDirty, isValid },
            null,
            2
          )}
        </pre> */}
      </form>
    </div>
  );
}

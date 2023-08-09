'use client';
import { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Modal from '@/components/Modal';
import { useLenis } from '@studio-freight/react-lenis';
import ReservationForm from '@/components/ReservationForm';
import { Button } from '@/components/Button/Button';
import styles from '@/styles/containers/Reservation.module.scss';
import Calendar from '@/svgs/Calendar';
import cn from 'classnames';

type Props = {
  as: 'icon' | 'button';
  variant?: 'secondary' | 'primary' | 'tertiary';
};

export default function Reservation({ as, variant }: Props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const lenis = useLenis((lenis: any) => lenis);
  
  // useEffect(() => {
  //   if (modalIsOpen) {
  //     lenis?.stop();
  //   } else {
  //     lenis?.start();
  //   }
  // }, [lenis, modalIsOpen]);

  function toggleFunction() {
    setModalIsOpen(true);
  }

  const toggleFunc = useCallback(() => {
    setModalIsOpen(false);
  }, [setModalIsOpen]);

  return (
    <>
      {as === 'icon' ? (
        <button className={styles['btn']} onClick={toggleFunction}>
          <Calendar />
        </button>
      ) : (
        <Button variant={variant} size={'lg'} onClick={toggleFunction}>
          Book A Table
        </Button>
      )}

      <Modal toggleFunc={toggleFunc} isOpened={modalIsOpen}>
        <div className={cn(styles['title'], 'sm-mt-2 lg-mt-2')}>
          <h1 className='title-md  border clr-primary tac'>Book A Table</h1>
        </div>
        <ReservationForm />
      </Modal>
    </>
  );
}

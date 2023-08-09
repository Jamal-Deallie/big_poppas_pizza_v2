'use client';
import { useState } from 'react';
import styles from '@/styles/components/TestModal.module.scss';
type Props = {};

export default function TestModal({}: Props) {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(true);
  return (
    <div>
      <button className={styles['clickme']} onClick={() => Toggle()}>
        Modal
      </button>
      {modal ? (
        <div className={styles['modalContainer']}>
          <div className={styles['modal']}>
            <header className={styles['modal_header']}>
              <h2 className={styles['modal_header-title']}> Modal Title </h2>
              <button className={styles['close']}>X</button>
            </header>
            <main className={styles['modal_content']}>
              This is Modal Content
            </main>
            <footer className={styles['modal_footer']}>
              <button className={styles['modal-close']}>Cancel</button>

              <button className={styles['submit']}>Submit</button>
            </footer>
          </div>
        </div>
      ) : null}
    </div>
  );
}

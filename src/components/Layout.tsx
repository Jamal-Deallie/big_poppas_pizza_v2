import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ViewPortHeight from '@/components/ViewPortHeight';
import styles from '@/styles/components/Layout.module.scss';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ViewPortHeight />
      <div className={styles['layout']}>
        <Navbar />
        <main className={styles['main-wrap']}>{children}</main>
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}

import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import styles from '@/styles/components/Layout.module.scss';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles['layout']}>
      <Navbar />
      <main className={styles['main-wrap']}>{children}</main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

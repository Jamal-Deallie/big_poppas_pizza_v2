import { Suspense } from 'react';
import Contact from '@/containers/Contact';
import Loading from '@/components/Loading';
import Carousel from '@/containers/Carousel';
import Map from '@/containers/Map';

export const metadata = {
  title: 'Visit Us',
  description: 'Visit Big Poppas Pizza',
};

export default function page() {
  return (
    <section>
      <Suspense>
        <Carousel />
      </Suspense>
      <Suspense>
        <Map />
      </Suspense>
      <Contact />
    </section>
  );
}

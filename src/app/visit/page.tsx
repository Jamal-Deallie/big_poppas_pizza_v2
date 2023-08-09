import Contact from '@/containers/Contact';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';

export const metadata = {
  title: 'Visit Us',
  description: 'Visit Big Poppas Pizza',
};

const DynamicCarousel = dynamic(() => import('@/containers/Carousel'), {
  ssr: false,
  loading: () => <Loading border='#fff' />,
});
const DynamicMap= dynamic(() => import('@/containers/Map'), {
  ssr: false,
  loading: () => <Loading border='#fff' />,
});

export default function page() {
  return (
    <section>
      <DynamicCarousel />
      <DynamicMap />
      <Contact />
    </section>
  );
}

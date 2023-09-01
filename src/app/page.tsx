import Intro from '@/containers/Intro';
import Hero from '@/containers/Hero';
import Feature from '@/containers/Feature';
import Flavors from '@/containers/Flavors';
import TenCommandments from '@/containers/TenCommandments';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';

const DynamicDelivery = dynamic(() => import('@/containers/Delivery'), {
  ssr: false,
  loading: () => <Loading border='#fff' />,
});
const DynamicReviews = dynamic(() => import('@/containers/Reviews'), {
  ssr: false,
  loading: () => <Loading border='#fff' />,
});
const DynamicFollowUs = dynamic(() => import('@/containers/FollowUs'), {
  ssr: false,
  loading: () => <Loading border='#fff' />,
});
export default function Home() {
  return (
    <section className='of-hidden'>
      <Hero />
      <Feature />
      <Intro />
      <TenCommandments />
      <DynamicDelivery />
      <Flavors />
      <DynamicReviews />
      <DynamicFollowUs />
    </section>
  );
}

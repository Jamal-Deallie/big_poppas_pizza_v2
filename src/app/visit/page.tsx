import Carousel from '@/containers/Carousel';
import Map from '@/containers/Map';
import Contact from '@/containers/Contact';

export const metadata = {
  title: 'Contact Us',
  description: 'Contact Big Poppas Pizza',
};

export default function page() {
  return (
    <>
      <Carousel />
      <Map />
      <Contact />
    </>
  );
}

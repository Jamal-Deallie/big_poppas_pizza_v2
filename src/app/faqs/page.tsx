import Accordions from '@/containers/Accordions';

export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'Faqs about Big Poppas Pizza',
};

export default function page() {
  return (
    <section>
      <Accordions />
    </section>
  );
}

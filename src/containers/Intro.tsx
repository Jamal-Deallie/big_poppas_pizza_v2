import styles from '@/styles/containers/Intro.module.scss';
import Image from 'next/image';
import Pizza from '@/svgs/Pizza';
import DoodleStars from '@/svgs/DoodleStars';
import { LinkButton } from '@/components/Button/LinkButton';
import cn from 'classnames';
type Props = {};

export default function Intro({}: Props) {
  return (
    <section className={cn('primary-theme', styles['intro'])}>
      <div className='py-sm-64 pt-lg-128 pb-lg-188'>
        <div className='grid-inner'>
          <div className={styles['content']}>
            <h1 className='title-lg clr-secondary'>One More Slice</h1>
            <p className='txt-md mt-sm-32 mt-lg-40'>
              Big Poppas: Where flavor reigns supreme. Dive into our bold,
              mouthwatering pizzas inspired by the legendary Notorious B.I.G.
              Indulge in the pizza revolution with us.
            </p>
            <div className='mt-sm-24 mt-lg-24'>
              <LinkButton variant={'secondary'} size={'lg'} href={'about'}>
                Learn More
              </LinkButton>
            </div>
          </div>
          <aside className={styles['pizza']}>
            <span className={cn(styles['stars-svg'], 'hide-mobile')}>
              <DoodleStars />
            </span>
            <div className={styles['img']}>
              <Image
                src={
                  'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1687578364/big_poppas/intro_bp_j13uow.webp'
                }
                alt='Woman holding Big Poppas Pepperoni Pizza'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
          </aside>
        </div>
        <span className={cn(styles['pizza-svg'], 'hide-mobile')}>
          <Pizza />
        </span>
      </div>
    </section>
  );
}

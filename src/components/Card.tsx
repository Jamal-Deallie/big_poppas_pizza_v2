import cn from 'classnames';
import Image from 'next/image';
import styles from '@/styles/components/Card.module.scss';

type SlideProps = {
  src: string;
  price: number;
  name: string;
};

export default function Card({ src, name, price }: SlideProps) {
  return (
    <div className={styles['card']}>
      <div className={cn(styles['inner'], 'bg-tertiary')}>
        <div className={cn(styles['img'], 'br')}>
          <Image
            alt={name}
            src={src}
            fill
            sizes={'(max-width: 768px) 100vw'}
            priority
          />
        </div>
      </div>
      <div className={cn(styles['details'], 'clr-secondary')}>
        <span className='tac sm-mt-1 lg-mt-2'>{name}</span>
        <span className='tac'>{`$${price}`}</span>
      </div>
    </div>
  );
}

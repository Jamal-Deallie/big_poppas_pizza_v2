import { featureItems } from '@/data/featureItems';
import Image from 'next/image';
import styles from '@/styles/containers/Feature.module.scss';
import Link from 'next/link';
type Props = {};

export default function Feature({}: Props) {
  return (
    <section className='bg-tertiary py-lg-96 py-sm-64'>
      <div className='main-cont'>
        <div className={styles['title']}>
          <h1 className='title-lg clr-primary tac border'>As Seen in</h1>
        </div>
        <div className={styles['grid-wrap']}>
          <div className={styles['grid']}>
            {featureItems.map(({ id, src, alt }) => {
              return (
                <div className={styles['item']} key={id}>
                  <div className={styles['logo']}>
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

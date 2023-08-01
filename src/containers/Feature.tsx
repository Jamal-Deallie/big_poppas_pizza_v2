import { featureItems } from '@/data/featureItems';
import Image from 'next/image';
import styles from '@/styles/containers/Feature.module.scss';
import Link from 'next/link';
type Props = {};

export default function Feature({}: Props) {
  return (
    <section className='bg-tertiary lg-py-12 sm-py-8'>
      <div className='main-cont'>
        <div className={styles['title']}>
          <h1 className='title-lg clr-primary tac border'>As Seen in</h1>
        </div>

        <div className={styles['link-cont']}>
          <Link href='/' className={styles['link']}>
            <span>Home</span>
            <svg height={18} className={styles['graphic']} viewBox='0 0 59 18'>
              <path
                d='M.945.149C12.3 16.142 43.573 22.572 58.785 10.842'
                pathLength={1}
              />
            </svg>
          </Link>
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

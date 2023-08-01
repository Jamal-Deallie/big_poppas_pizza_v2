import Image from 'next/image';
import cn from 'classnames';
import styles from '@/styles/containers/Story.module.scss';
type Props = {};

export default function Story({}: Props) {
  return (
    <section className={cn('primary-theme', styles['story'])}>
      <div className='sm-py-7 lg-py-16'>
        <div>
          <div className={styles['title']}>
            <h1 className='title-lg tac clr-tertiary'>I Got A Story To Tell</h1>
          </div>
          <div className='grid-inner'>
            <div className={styles['content']}>
              <div className={styles['logo']}>
                <Image
                  src={
                    'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002133/big_poppas/logo_secondary_kdcdvb.svg'
                  }
                  alt='logo'
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>
              <p className='txt-md clr-tertiary desc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className='txt-md clr-tertiary desc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className={styles['sig']}>
                <Image
                  fill
                  src={
                    'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002349/big_poppas/signature_h5rlvp.svg'
                  }
                  sizes='(max-width: 768px) 100vw)'
                  alt='Voletta Wallace'
                />
              </div>
              <div>
                <span className='txt-lg'>Voletta Wallace</span>
                <span className='txt-lg'>Founder</span>
              </div>
            </div>

            <aside>
              <div className={styles['img']}>
                <Image
                  fill
                  src={
                    'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1683002349/big_poppas/voletta_wallace_aqekgf.jpg'
                  }
                  sizes='(max-width: 768px) 100vw)'
                  alt='Voletta Wallace'
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

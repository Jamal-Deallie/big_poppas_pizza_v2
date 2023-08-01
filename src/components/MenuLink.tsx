import { gsap } from 'gsap';
import { useRef } from 'react';
import styles from '@/styles/components/MenuLink.module.scss';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import Link from 'next/link';
import cn from 'classnames';

export default function MenuLink({
  path,
  label,
  src,
}: {
  path: string;
  label: string;
  src: string;
}) {
  const vid = useRef(null!);
  const link = useRef(null!);
  const rotate = Math.floor(Math.random() * 20) + 1;

  useIsomorphicLayoutEffect(() => {
    gsap.set(vid.current, { opacity: 0, xPercent: 300 });
    gsap.to(link.current, { color: '#fff' });
  }, [vid, link]);

  const onEnter = () => {
    gsap.to(link.current, { color: '#e05333', scale: 1.05 });
    gsap.to(vid.current, { opacity: 1, xPercent: 125, rotate: rotate });
  };

  const onLeave = () => {
    gsap.to(link.current, { color: '#fff', scale: 1 });
    gsap.to(vid.current, { opacity: 0, xPercent: 300, rotate: 0 });
  };
  return (
    <div className={styles['link-cont']}>
      <div
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        ref={link}
        className={styles['link']}>
        <Link href={path} className='title-lg'>
          {label}
        </Link>
      </div>
      <div className={cn(styles['vid-cont'], styles[`${label}`])} ref={vid}>
        <div className={cn(styles['wrap'], styles[`${label}`])}>
          <video width='100%' muted={true} autoPlay loop>
            <source src={src} type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  );
}

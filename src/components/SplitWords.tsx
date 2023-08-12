'use client';

import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayout';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';

type AnimationProps = {
  children?: ReactNode;
  delay?: 0;
  start?: string;
};

export default function SplitWords({ children, start }: AnimationProps) {

  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(SplitText);
    const mm = gsap.matchMedia(root);

    mm.add('(min-width: 850px)', () => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          start: '-=20% top' || start,
          end: 'bottom bottom',
          trigger: root.current,
        },
      });

      const splitWords = new SplitText('.split-words', { type: 'words' });

      tl.current
        .from('.fade-vid', {
          opacity: 0,
          duration: 1,
          ease: 'sine.in',
        })
        .from(splitWords.words, {
          opacity: 0,
          yPercent: 130,
          duration: 1.25,
          ease: 'back',
          stagger: 0.05,
        }, '-=0.25')
        .from('.fade-btn', {
          opacity: 0,
          duration: 1,
          ease: 'sine.in',
        }, '-=1');
    });

    return () => {
      mm.revert();
    };
  }, []);

  return <div ref={root}>{children}</div>;
}

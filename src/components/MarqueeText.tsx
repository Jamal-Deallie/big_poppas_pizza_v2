'use client';

import { ReactNode, memo, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { horizontalLoop } from '@/helpers/horizontalLoop';

function Marquee({
  children,
  reverse = false,
}: {
  children: ReactNode;
  reverse?: boolean;
}) {

  const root = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const mm = gsap.matchMedia(root);

    mm.add('(min-width: 850px)', () => {
      const links: any[] = gsap.utils.toArray('.scroll-txt');
      document.fonts.ready.then(function () {
        horizontalLoop(links, {
          repeat: -1,
          speed: 1,
          draggable: false,
          reversed: reverse,
          paddingRight: parseFloat(
            //@ts-ignore
            gsap.getProperty(links[0], 'marginRight', 'px')
          ),
        });
      });
    });

    return () => {
      mm.revert();
    };
  }, [horizontalLoop]);

  return <div ref={root}>{children}</div>;
}

export const MarqueeText = memo(Marquee);

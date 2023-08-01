'use client';

import { ReactNode, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import gsap from 'gsap';
import { horizontalLoop } from '@/helpers/horizontalLoop';

export default function MarqueeText({
  children,
  reverse,
}: {
  children: ReactNode;
  reverse?: boolean;
}) {
  const root = useRef<HTMLDivElement>(null!);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let loops = gsap.utils.toArray('.txt-wrapper').map((line, i) => {
        const links: any[] = gsap.utils.toArray('.scroll-txt');
        document.fonts.ready.then(function () {
          const tl = horizontalLoop(links, {
            repeat: -1,
            speed: 1 + i * 0.5,
            draggable: true,
            reversed: reverse,
            paddingRight: parseFloat(
              //@ts-ignore
              gsap.getProperty(links[0], 'marginRight', 'px')
            ),
          });
        });
      });
    }, root);

    return () => ctx.revert(); // cleanup!
  }, []);
  return <div ref={root}>{children}</div>;
}

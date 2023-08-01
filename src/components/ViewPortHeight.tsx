'use client'

import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';

export default function ViewPortHeight() {
  useIsomorphicLayoutEffect(() => {
    function onWindowResize() {
      //we get the viewport height and we multiple it by 1% to get a value for a vh unit
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty(
        '--vh',

        window.innerHeight * 0.01 + 'px'
      );
    }
    // We listen to the resize event
    window.addEventListener('resize', onWindowResize, false);
    onWindowResize();

    return () => {
      window.removeEventListener('resize', onWindowResize, false);
    };
  }, []);

  return null;
}

'use client';

import { useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import { useLenis, Lenis as ReactLenis } from '@studio-freight/react-lenis';
import { useStore } from '@/lib/store';
//@ts-ignore
import Tempus from '@studio-freight/tempus';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  // ScrollTrigger.defaults({ markers: process.env.NODE_ENV === 'development' });
  gsap.ticker.lagSmoothing(0);
  gsap.ticker.remove(gsap.updateRoot);
  Tempus.add((time: number) => {
    gsap.updateRoot(time / 1000);
  }, 0);

  // reset scroll position
  window.scrollTo(0, 0);
  window.history.scrollRestoration = 'manual';
}

export default function Lenis({ children }: { children: ReactNode }) {
  const navIsOpen = useStore(({ navIsOpen }) => navIsOpen);
  const lenis = useLenis(ScrollTrigger.update);
  useEffect(ScrollTrigger.refresh, [lenis]);

  useEffect(() => {
    if (navIsOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [navIsOpen, lenis]);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return <ReactLenis root>{children}</ReactLenis>;
}

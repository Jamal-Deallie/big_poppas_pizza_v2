'use client';

import { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useComponentHydrated } from 'react-hydration-provider';

export default function IsDesktop({ children }: { children: ReactNode }) {
  const hydrated = useComponentHydrated();

  const DesktopAndAbove = useMediaQuery(
    { query: '(min-width: 850px)' },
    hydrated ? undefined : { deviceWidth: 850 }
  );

  return DesktopAndAbove ? children : null;
}

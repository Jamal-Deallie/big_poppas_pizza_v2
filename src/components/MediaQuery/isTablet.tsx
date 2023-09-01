'use client';

import { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useComponentHydrated } from 'react-hydration-provider';

export default function isTablet({
  children,
}: {
  children: ReactNode;
}) {
  const hydrated = useComponentHydrated();

  const isTabletAndBelow = useMediaQuery(
    { query: '(max-width: 849px)' },
    hydrated ? undefined : { deviceWidth: 849 }
  );
  return isTabletAndBelow ? children : null;
}

'use client';

import { Button } from '@/components/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className='main-cont py-lg-128 py-sm-64'>
      <h2 className='title-lg clr-tertiary'>Something went wrong!</h2>
      <Button onClick={() => reset()} variant='tertiary' size='lg'>
        Try again
      </Button>
    </div>
  );
}

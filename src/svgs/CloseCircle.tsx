import * as React from 'react';

export default function CloseCircle({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 666.67 666.67'
      className={className}>
      <path
        d='m233.33 233.33 100 100m0 0 100 100m-100-100-100 100m100-100 100-100m-100 400c-165.69 0-300-134.31-300-300s134.32-300 300-300 300 134.31 300 300-134.31 300-300 300Z'
        style={{
          fill: 'none',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '67px',
        }}
      />
    </svg>
  );
}

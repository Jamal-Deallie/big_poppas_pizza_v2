import React from 'react';

type Props = {};

export default function ScrollUpArrow({}: Props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path d='M23 0H1C.45 0 0 .45 0 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1M14.46 9.79l-1.89-2a.833.833 0 0 0-1.17-.03l-.03.03-1.87 2-1.16 1.31A.818.818 0 0 0 9 12.48h2.05V23c0 .55.45 1 1 1s1-.45 1-1V12.45h2.06c.46 0 .82-.38.82-.84 0-.21-.08-.41-.23-.56l-1.24-1.26Z' />
    </svg>
  );
}

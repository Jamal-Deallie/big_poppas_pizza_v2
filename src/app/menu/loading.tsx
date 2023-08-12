import React from 'react';
import Loading from '@/components/Loading';
type Props = {};

export default function loading({}: Props) {
  return (
    <div>
      <Loading border='#fff' />
    </div>
  );
}

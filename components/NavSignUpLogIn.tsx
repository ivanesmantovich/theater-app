import React from 'react';
import Link from 'next/link';

type LogSignType = {};

export const LogSign = ({}: LogSignType) => {
  return (
    <div className={'flex justify-center md:justify-end'}>
      <Link href="/signup">
        <span className={'button transition-colors'}>Sign up</span>
      </Link>
      <Link href="/login">
        <span className={'button ml-2 transition-colors'}>Log In</span>
      </Link>
    </div>
  );
};

export default LogSign;

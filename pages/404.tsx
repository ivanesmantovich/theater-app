import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

type NotFoundType = {};

export const NotFound = ({}: NotFoundType) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className={'text-center'}>
      <h1>Oops...</h1>
      <h2>That page cannot be found.</h2>{' '}
      <h2>
        <Link href={'/'}>
          <span className={'text-blue-800 cursor-pointer underline'}>
            Go back to the Homepage.
          </span>
        </Link>
      </h2>
    </div>
  );
};

export default NotFound;

import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

type LogSignType = {};

export const LogSign = ({}: LogSignType) => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log('session:', session);

  return (
    <div className={'flex justify-center md:justify-end'}>
      <Link href="/auth/signup">
        <span className={'button transition-colors'}>Sign up</span>
      </Link>
      {session ? (
        <button
          className={'button ml-2 transition-colors'}
          onClick={() => signOut()}
        >
          Log Out
        </button>
      ) : (
        <Link href="/auth/login">
          <span className={'button ml-2 transition-colors'}>Log In</span>
        </Link>
      )}
    </div>
  );
};

export default LogSign;

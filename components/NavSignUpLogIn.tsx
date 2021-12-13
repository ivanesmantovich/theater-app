import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../ts/firestoreConfig';
import { FirebaseAuthContext } from '../store/auth-context';

type LogSignType = {};
export const LogSign = ({}: LogSignType) => {
  const context = useContext(FirebaseAuthContext);
  const userId = context.userId;

  return (
    <div className={'flex justify-center md:justify-end'}>
      {userId !== null ? (
        <Link href={'/'}>
          <span
            className={'button ml-2 transition-colors'}
            onClick={() => {
              signOut(auth)
                .then(() => {
                  console.log('User signed out');
                })
                .catch((error) => {
                  console.log(error.message);
                });
            }}
          >
            Log Out
          </span>
        </Link>
      ) : (
        <>
          <Link href="/auth/signup">
            <span className={'button transition-colors'}>Sign up</span>
          </Link>
          <Link href="/auth/login">
            <span className={'button ml-2 transition-colors'}>Log In</span>
          </Link>
        </>
      )}
    </div>
  );
};

export default LogSign;

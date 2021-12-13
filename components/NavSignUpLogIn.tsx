import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../ts/firestoreConfig';

type LogSignType = {};
export const LogSign = ({}: LogSignType) => {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser !== null);
  const unsubAuth = onAuthStateChanged(auth, (user) => {
    setIsLoggedIn(auth.currentUser !== null);
  });

  return (
    <div className={'flex justify-center md:justify-end'}>
      {isLoggedIn ? (
        <button
          className={'button ml-2 transition-colors'}
          onClick={() => {
            signOut(auth)
              .then(() => {
                console.log('User signed out');
              })
              .catch((error) => {
                console.log(error.message);
              });
            unsubAuth();
          }}
        >
          Log Out
        </button>
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

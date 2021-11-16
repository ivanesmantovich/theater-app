import React from 'react';
import Head from 'next/head';
import SignUpForm from '../components/SignUpForm';

type signUpType = {};

export const SignUp = ({}: signUpType) => {
  return (
    <>
      <Head>
        <title>Theater App | Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignUpForm />
    </>
  );
};

export default SignUp;

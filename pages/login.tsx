import React from 'react';
import Head from 'next/head';
import LogInForm from '../components/LogInForm';

type signUpType = {};

export const SignUp = ({}: signUpType) => {
  return (
    <>
      <Head>
        <title>Theater App | Log In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LogInForm />
    </>
  );
};

export default SignUp;

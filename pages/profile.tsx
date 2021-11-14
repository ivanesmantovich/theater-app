import React from 'react';
import Head from 'next/head';

type profileType = {};

export const Profile = ({}: profileType) => {
  return (
    <>
      <Head>
        <title>Theater App | Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h2 className={'text-6xl text-purple-700 font-semibold'}>
          Your Profile
        </h2>
      </header>
    </>
  );
};

export default Profile;

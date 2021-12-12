import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { auth, db } from '../ts/firestoreConfig';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

type profileType = {};

const Profile = ({}: profileType) => {
  const [userId, setUserId] = useState('');
  const [fetchedData, setFetchedData] = useState({});
  const unsubAuth = onAuthStateChanged(auth, (user) => {
    setUserId(user.uid);
  });

  const getUserData = async () => {
    if (userId !== '') {
      const docRef = doc(db, 'users', userId);
      const userDoc = await getDoc(docRef);
      return userDoc.data();
      // return userData;
    }
  };

  useEffect(() => {
    getUserData().then((userData) => {
      let data = userData;
      if (data !== undefined) setFetchedData(data);
    });
  }, [userId]);

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
      <main className={'mt-2'}>
        <h3 className={'text-2xl font-semibold'}>EMail:</h3>
        {/*@ts-ignore*/}
        <p>{fetchedData.email}</p>
        <h3 className={'text-2xl font-semibold'}>Name:</h3>
        {/*@ts-ignore*/}
        <p>{`${fetchedData.firstName} ${fetchedData.lastName}`}</p>
        <h3 className={'text-2xl font-semibold'}>Age:</h3>
        {/*@ts-ignore*/}
        <p>{fetchedData.age}</p>
        <h3 className={'text-2xl font-semibold'}>Gender:</h3>
        {/*@ts-ignore*/}
        <p>{fetchedData.gender === 'm' ? 'Male' : 'Female'}</p>
      </main>
    </>
  );
};

export default Profile;

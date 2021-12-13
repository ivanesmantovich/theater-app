import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import { auth, db } from '../ts/firestoreConfig';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuthContext } from '../store/auth-context';

type profileType = {};

const Profile = ({}: profileType) => {
  const context = useContext(FirebaseAuthContext);
  const userId = context.userId;
  const [fetchedData, setFetchedData] = useState({});

  const getUserData = async () => {
    if (userId !== null) {
      const docRef = doc(db, 'users', userId);
      const userDoc = await getDoc(docRef);
      return userDoc.data();
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
        <p>{fetchedData.gender}</p>
      </main>
    </>
  );
};

export default Profile;

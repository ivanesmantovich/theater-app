import React from 'react';
import Head from 'next/head';
import AllSessions from '../components/AllSessions';

type ticketsType = {};

export const Tickets = ({}: ticketsType) => {
  return (
    <>
      <Head>
        <title>Theater App | Sessions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h2 className={'text-6xl text-purple-700 font-semibold'}>Sessions</h2>
      </header>
      <AllSessions />
    </>
  );
};

export default Tickets;

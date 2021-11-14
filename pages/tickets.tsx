import React from 'react';
import Head from 'next/head';

type ticketsType = {};

export const Tickets = ({}: ticketsType) => {
  return (
    <>
      <Head>
        <title>Theater App | Tickets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h2 className={'text-6xl text-purple-700 font-semibold'}>
          Your Tickets
        </h2>
      </header>
    </>
  );
};

export default Tickets;

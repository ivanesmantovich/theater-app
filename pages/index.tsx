import Head from 'next/head';
import Theater from '../components/Theater';
import { useSession } from 'next-auth/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Theater App | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Theater />
      </div>
    </>
  );
}

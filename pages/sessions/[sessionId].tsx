import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { moviesInfo } from '../../ts/moviesInfo';
import InfoPart from '../../components/InfoPart';
import CreateSession from '../../components/CreateSession';
import MovieSessions from '../../components/MovieSessions';
import { FirebaseAuthContext } from '../../store/auth-context';
import { doc, DocumentSnapshot, getDoc, query } from 'firebase/firestore';
import { db, usersRef } from '../../ts/firestoreConfig';
import { format } from 'date-fns/esm';

type sessionType = {};

const Session = ({}: sessionType) => {
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState<any>('');
  const [creatorData, setCreatorData] = useState<any>();
  const router = useRouter();
  const { sessionId } = router.query;

  useEffect(() => {
    if (!sessionId) {
      return;
    }
    const getSession = async () => {
      const sessionRef = doc(db, 'sessions', sessionId.toString());
      const session = await getDoc(sessionRef);
      setSession(session);
      const creatorRef = doc(db, 'users', session.data().creatorId);
      const creator = await getDoc(creatorRef);
      setCreatorData(creator.data());
      setIsLoading(false);
    };
    getSession();
  }, [sessionId]);

  return (
    <div>
      <Head>
        <title>{`Theater App | ${'Session'}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading && <div>Loading...</div>}
      {isLoading === false && (
        <>
          <header>
            <h2 className={'text-6xl text-purple-700 font-semibold'}>
              Session
            </h2>
          </header>
          <main className="mt-3 text-xl">
            <div>
              <span className="font-semibold">{'ID: '}</span>
              {session.id}
            </div>
            <div>
              <span className="font-semibold">{'Message: '}</span>
              {session.data().message}
            </div>
            <div>
              <span className="font-semibold">{'Date: '}</span>
              {format(session.data().date.toDate(), 'yyyy.MM.dd')}
            </div>
            <div>
              <span className="font-semibold">{'Time: '}</span>
              {format(session.data().date.toDate(), 'HH:mm:ss')}
            </div>
            <div>
              <span className="font-semibold">{'Creator Name: '}</span>
              {`${creatorData.firstName} ${creatorData.lastName}`}
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default Session;

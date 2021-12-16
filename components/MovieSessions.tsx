import { onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { db, sessionsRef } from '../ts/firestoreConfig';

type MovieSessionsType = {
  movieId: string | string[];
};

const MovieSessions = ({ movieId }: MovieSessionsType) => {
  const [movieSessions, setMovieSessions] = useState([]);

  const q = query(
    sessionsRef,
    where('movieId', '==', movieId),
    orderBy('createdAt', 'desc')
  );

  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      const newSessions = [];
      querySnapshot.forEach((doc) => {
        newSessions.push({ ...doc.data(), id: doc.id });
      });
      console.log('Age diffs: ', newSessions);
      setMovieSessions(newSessions);
      console.log('movieSessions:', movieSessions);
    });
  }, []);

  return (
    <>
      <div>Movie({movieId}) Sessions:</div>
      {movieSessions.map((movieSession) => {
        return (
          <div key={uuidv4()}>
            <span>{movieSession.ageDiff}</span>
          </div>
        );
      })}
    </>
  );
};

export default MovieSessions;

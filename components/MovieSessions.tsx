import { onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db, sessionsRef } from '../ts/firestoreConfig';

type MovieSessionsType = {
  movieId: string | string[];
};

const MovieSessions = ({ movieId }: MovieSessionsType) => {
  const [movieSessions, setMovieSessions] = useState([]);

  const q = query(sessionsRef, where('movieId', '==', movieId));

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
          <div>
            <span>{movieSession.ageDiff}</span>
          </div>
        );
      })}
    </>
  );
};

export default MovieSessions;

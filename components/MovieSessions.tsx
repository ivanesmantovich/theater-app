import { onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useState } from 'react';
import { sessionsRef } from '../ts/firestoreConfig';

type MovieSessionsType = {
  movieId: string | string[];
};

const MovieSessions = ({ movieId }: MovieSessionsType) => {
  const [movieSessions, setMovieSessions] = useState([]);

  const q = query(
    sessionsRef,
    where('movieId', '==', movieId),
    orderBy('createdAt')
  );

  // ПЕРЕДЕЛАТЬ В USEEFFECT (это наверное исправит огромное количество вызовов)
//   const unsubMovieSessions = onSnapshot(q, (snapshot) => {
//     let newMovieSessions = [];
//     snapshot.docs.forEach((doc) => {
//       newMovieSessions.push({ ...doc.data(), id: doc.id });
//     });
//     setMovieSessions(newMovieSessions);
//     console.log(movieSessions);
//   });

  return (
    <>
      <div>Movie({movieId}) Sessions:</div>
      <div>{movieSessions}</div>
    </>
  );
};

export default MovieSessions;

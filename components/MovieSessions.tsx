import {
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  where,
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { db, sessionsRef, usersRef } from '../ts/firestoreConfig';
import { moviesInfo } from '../ts/moviesInfo';
import { format } from 'date-fns/esm';

type MovieSessionsType = {
  movieId: string | string[];
};

const MovieSessions = ({ movieId }: MovieSessionsType) => {
  const [movieSessions, setMovieSessions] = useState([]);
  const [users, setUsers] = useState([]);
  const index = Number(movieId) - 1;
  const movie = moviesInfo[index];

  const router = useRouter();

  const moviesQ = query(
    sessionsRef,
    where('movieId', '==', movieId),
    orderBy('createdAt', 'desc')
  );

  const usersQ = query(usersRef);

  const findUser = (users, userId) => {
    for (let user in users) {
      if (users[user].id === userId) return users[user].email;
    }
  };

  useEffect(() => {
    onSnapshot(moviesQ, (querySnapshot) => {
      const newSessions = [];
      querySnapshot.forEach((doc) => {
        newSessions.push({ ...doc.data(), id: doc.id });
      });
      setMovieSessions(newSessions);
    });

    onSnapshot(usersQ, (querySnapshot) => {
      const newUsers = [];
      querySnapshot.forEach((doc) => {
        newUsers.push({ ...doc.data(), id: doc.id });
      });
      setUsers(newUsers);
    });
  }, []);

  return (
    <div className="mt-4 p-4 border border-l-4 border-r-4 rounded-lg  border-purple-700">
      <div className="font-bold">{`${movie.title} Sessions:`}</div>
      {movieSessions.map((movieSession, index) => {
        return (
          <div
            className="my-3 p-2 text-lg inline-block rounded-xl hover:bg-yellow-50 transition-all hover:cursor-pointer"
            key={uuidv4()}
            onClick={() => router.push(`/sessions/${movieSession.id}`)}
          >
            <div className="text-2xl">
              <span>{`${index + 1}.`}</span>{' '}
              <span className="font-semibold underline text-purple-800">{`${
                movieSession.message.length > 20
                  ? movieSession.message.substring(0, 20) + '...'
                  : movieSession.message
              }`}</span>{' '}
              <span>{movieSession.gender === 'Male' ? '🧑🏼' : '👩🏼'}</span>
            </div>
            <div>
              <p>{`🗓 ${format(movieSession.date.toDate(), 'yyyy.MM.dd')}`}</p>
            </div>
            <div>
              <p>{`🕰 ${format(movieSession.date.toDate(), 'HH:mm:ss')}`}</p>
            </div>
            <div>
              <p>{`${
                movieSession.multiplePeople === false ? '💐 Date' : '🎉 Party'
              }`}</p>
            </div>
            <div>
              <p className="font-semibold">{`${findUser(
                users,
                movieSession.creatorId
              )}`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieSessions;

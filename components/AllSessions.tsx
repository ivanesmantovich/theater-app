import {
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { db, sessionsRef } from '../ts/firestoreConfig';
import { format } from 'date-fns';
import { FirebaseAuthContext } from '../store/auth-context';
import { Button } from '@mui/material';
import { moviesInfo } from '../ts/moviesInfo';

const AllSessions = () => {
  const context = useContext(FirebaseAuthContext);
  const userId = context.userId;

  const [sessions, setSessions] = useState([]);
  const [customQuery, setCustomQuery] = useState(query(sessionsRef));
  const [sortDate, setSortDate] = useState('');
  const [sortGender, setSortGender] = useState('');

  useEffect(() => {
    onSnapshot(customQuery, (querySnapshot) => {
      const sessions = [];
      querySnapshot.forEach((doc) => {
        sessions.push({ ...doc.data(), id: doc.id });
      });
      setSessions(sessions);
    });
  }, [customQuery]);

  const deleteSession = async (id) => {
    const sessionDoc = doc(db, 'sessions', id);
    await deleteDoc(sessionDoc);
    console.log('deleted');
  };

  const sortByDate = () => {
    setSortGender('');
    if (sortDate === '' || sortDate === 'asc') {
      setCustomQuery(query(sessionsRef, orderBy('date', 'desc')));
      setSortDate('desc');
    } else {
      setCustomQuery(query(sessionsRef, orderBy('date', 'asc')));
      setSortDate('asc');
    }
  };

  const sortByGender = () => {
    setSortDate('');
    if (sortGender === '' || sortGender === 'asc') {
      setCustomQuery(query(sessionsRef, orderBy('gender', 'desc')));
      setSortGender('desc');
    } else {
      setCustomQuery(query(sessionsRef, orderBy('gender', 'asc')));
      setSortGender('asc');
    }
  };

  return (
    <div className={'mt-2'}>
      <div>
        <Button
          className={'mr-2'}
          variant="contained"
          disableElevation
          size="large"
          onClick={sortByDate}
        >
          By date
        </Button>
        <Button
          variant="contained"
          disableElevation
          size="large"
          onClick={sortByGender}
        >
          By gender
        </Button>
      </div>
      <div
        className={
          'mt-4 px-2 pb-2 pt-4 border border-l-4 border-r-4 rounded-lg  border-purple-700'
        }
      >
        {sessions.map((session) => {
          return (
            <div className={'text-lg mb-3'} key={session.id}>
              <Button
                className={'mr-2'}
                variant="contained"
                disableElevation
                size="small"
                onClick={() => {
                  deleteSession(session.id);
                }}
                disabled={userId !== session.creatorId}
              >
                X
              </Button>

              <span className={'font-semibold'}>{'Title: '}</span>
              <span className={'mr-2'}>{`${
                moviesInfo[session.movieId - 1].title
              }`}</span>

              <span className={'font-semibold'}>{"Creator's Name: "}</span>
              <span
                className={'mr-2'}
              >{`${session.members[0].firstName} ${session.members[0].lastName}`}</span>

              <span className={'font-semibold'}>{'Date: '}</span>
              <span className={'mr-2'}>{`${format(
                session.date.toDate(),
                'yyyy.MM.dd'
              )}`}</span>

              <span className={'font-semibold'}>{'Time: '}</span>
              <span className={'mr-2'}>{`${format(
                session.date.toDate(),
                'HH:mm:ss'
              )}`}</span>

              <span
                className={`${
                  session.gender === 'Male' ? 'text-blue-500' : ''
                } ${session.gender === 'Female' ? 'text-pink-500' : ''} ${
                  session.gender === 'Other' ? 'text-purple-500' : ''
                }`}
              >{`Message: ${
                session.message.length > 20
                  ? session.message.substring(0, 20) + '...'
                  : session.message
              }`}</span>
              {session.gender === 'Male' && <span>{' 🧑'}</span>}
              {session.gender === 'Female' && <span>{' 👩'}</span>}
              {session.gender === 'Other' && <span>{' 👤'}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSessions;

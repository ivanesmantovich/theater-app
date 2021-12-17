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
    <div>
      <div>
        <Button
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
      {sessions.map((session) => {
        return (
          <div key={session.id}>
            <div>
              <p>{`Movie ID: ${session.movieId}`}</p>
            </div>
            <div>
              <p>{`Date: ${format(session.date.toDate(), 'yyyy.MM.dd')}`}</p>
            </div>
            <div>
              <p>{`Time: ${format(session.date.toDate(), 'HH:mm:ss')}`}</p>
            </div>
            <div>
              <p>{`Looking for: ${session.gender}`}</p>
            </div>
            <div>
              <p>{`Message: ${session.message}`}</p>
            </div>
            <div>
              <p>{`Creator: ${session.creatorId}`}</p>
            </div>
            {userId === session.creatorId && (
              <div>
                <Button
                  variant="contained"
                  disableElevation
                  size="medium"
                  onClick={() => {
                    deleteSession(session.id);
                  }}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AllSessions;

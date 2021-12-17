import { deleteDoc, doc, getDocs, onSnapshot, query } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { db, sessionsRef } from '../ts/firestoreConfig';
import { format } from 'date-fns';
import { FirebaseAuthContext } from '../store/auth-context';

const AllSessions = () => {
  const context = useContext(FirebaseAuthContext);
  const userId = context.userId;

  const [sessions, setSessions] = useState([]);

  const q = query(sessionsRef);
  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      const sessions = [];
      querySnapshot.forEach((doc) => {
        sessions.push({ ...doc.data(), id: doc.id });
      });
      setSessions(sessions);
    });
  }, []);

  const deleteSession = async (id) => {
    const sessionDoc = doc(db, 'sessions', id);
    await deleteDoc(sessionDoc);
    console.log('deleted');
  };

  return (
    <div>
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
                <button
                  onClick={() => {
                    deleteSession(session.id);
                  }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AllSessions;

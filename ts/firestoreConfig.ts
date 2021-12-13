import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBW8HRnoPOarEM0fH8SJ75QLRamu6tLOLU',
  authDomain: 'theater-app-845c9.firebaseapp.com',
  projectId: 'theater-app-845c9',
  storageBucket: 'theater-app-845c9.appspot.com',
  messagingSenderId: '531118361177',
  appId: '1:531118361177:web:4d81c6519833e58ca57f48',
  measurementId: 'G-N9S7GLBG4F',
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);

// Ссылка на коллекцию юзеров
export const usersRef = collection(db, 'users');
export const sessionsRef = collection(db, 'sessions');

// Получить данные из коллекции
getDocs(usersRef)
  .then((snapshot) => {
    let users = [];
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });
    console.log(users);
  })
  .catch((error) => {
    console.log(error.message);
  });

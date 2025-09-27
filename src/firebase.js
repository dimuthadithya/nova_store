// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB9paDEeumYUczlFpAjQgdGEP8trpQMzXk',
  authDomain: 'nova-store-e6757.firebaseapp.com',
  projectId: 'nova-store-e6757',
  storageBucket: 'nova-store-e6757.firebasestorage.app',
  messagingSenderId: '551973449521',
  appId: '1:551973449521:web:164451f9730b0e12ae0a10',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

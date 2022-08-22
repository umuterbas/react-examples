// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBA5ofPxPMp0OahQvf9mPWQ7OIOgrd2SFs',
  authDomain: 'blog-posts-example-17667.firebaseapp.com',
  projectId: 'blog-posts-example-17667',
  storageBucket: 'blog-posts-example-17667.appspot.com',
  messagingSenderId: '493660871459',
  appId: '1:493660871459:web:3555cf4d751870b0e70a96',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore();

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { firebaseConfig } from './firebaseConfig';

// Initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const app = firebase.app();
const auth = firebase.auth();
const db = firebase.firestore();

// return firebase components
export { auth, db };

console.log(
  app.name ? 'Firebase is working!😎😎😎' : 'Firebase is not working 😫😪🤔'
);

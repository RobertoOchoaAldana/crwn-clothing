import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDNO2No9UyEQNJbce0c5Okf39tfXOj-MUY",
    authDomain: "crwn-db-b82ac.firebaseapp.com",
    databaseURL: "https://crwn-db-b82ac.firebaseio.com",
    projectId: "crwn-db-b82ac",
    storageBucket: "",
    messagingSenderId: "26868157536",
    appId: "1:26868157536:web:be8123d1d7f2fd1d51c705"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SigInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
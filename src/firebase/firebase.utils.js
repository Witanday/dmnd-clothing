import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBu61yg05FPhT_-qyxHTwDalIdq8uWZ1pc",
    authDomain: "dmnd-db-522f9.firebaseapp.com",
    databaseURL: "https://dmnd-db-522f9.firebaseio.com",
    projectId: "dmnd-db-522f9",
    storageBucket: "dmnd-db-522f9.appspot.com",
    messagingSenderId: "730760674176",
    appId: "1:730760674176:web:6be2c391bfc09457ec5f65",
    measurementId: "G-HJL6TNJ3QB"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
      prompt :"select_account"
  })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
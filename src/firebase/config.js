import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHLfeOhtB6S-ThcZNQqcMZeuESCFiOoB4",
  authDomain: "mymoney-f8b5b.firebaseapp.com",
  projectId: "mymoney-f8b5b",
  storageBucket: "mymoney-f8b5b.appspot.com",
  messagingSenderId: "849373784661",
  appId: "1:849373784661:web:b2b2cdc8f5562209dd02dc",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };

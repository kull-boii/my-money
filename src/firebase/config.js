import { initializeApp, firestore, auth } from "firebase/app";

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

const app = initializeApp(firebaseConfig);

const projectFirestore = firestore();
const projectAuth = auth();

export { projectFirestore, projectAuth };

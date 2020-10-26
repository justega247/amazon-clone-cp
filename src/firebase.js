import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBROFUUxP8tau6_rZygqGjskKAUw1qyaII",
  authDomain: "clone-cp-15021.firebaseapp.com",
  databaseURL: "https://clone-cp-15021.firebaseio.com",
  projectId: "clone-cp-15021",
  storageBucket: "clone-cp-15021.appspot.com",
  messagingSenderId: "816267968594",
  appId: "1:816267968594:web:188108291823e59a591f8b",
  measurementId: "G-Q9V944P603"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
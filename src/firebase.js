import firebase from "firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyD-hU_fdbiJBwezpmhqa_ymx2TYKVpuzuE",
    authDomain: "linkedin-539d0.firebaseapp.com",
    projectId: "linkedin-539d0",
    storageBucket: "linkedin-539d0.appspot.com",
    messagingSenderId: "379587906340",
    appId: "1:379587906340:web:cbe11c3aa0b667c48e41b1",
    measurementId: "G-CLEW9SNPSH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
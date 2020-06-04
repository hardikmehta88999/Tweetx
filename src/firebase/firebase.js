import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  // place your api keys 
  /* apiKey: "xxxxxxxxxxxxxxxxxxxxxxx",
   authDomain: "xxxxxxxxxxxxxxxxxxxxxxx",
   databaseURL: "xxxxxxxxxxxxxxxxxxxxxxx",
   projectId: "xxxxxxxxxxxxxxxxxxxxxxx",
   storageBucket: "xxxxxxxxxxxxxxxxxxxxxxx",
   messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxx",
   appId: "xxxxxxxxxxxxxxxxxxxxxxx",
   measurementId: "xxxxxxxxxxxxxxxxxxxxxxx"*/
};

export const myFirebase = firebase.initializeApp(firebaseConfig);

export default firebase;
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const fbConfig = {
  apiKey: "AIzaSyAXRkOMELKFa5paVWCxzZIVC2UDhxCSrqM",
  authDomain: "react-firebase-9c88a.firebaseapp.com",
  databaseURL: "https://react-firebase-9c88a.firebaseio.com",
  projectId: "react-firebase-9c88a",
  storageBucket: "react-firebase-9c88a.appspot.com",
  messagingSenderId: "724742235251",
  appId: "1:724742235251:web:f627c5797f9b3b46167606",
  measurementId: "G-B30DDY8G9M",
};

firebase.initializeApp(fbConfig);
firebase.firestore();

export default firebase;

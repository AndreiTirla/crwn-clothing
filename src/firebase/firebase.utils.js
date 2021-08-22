import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDSFC06T16ftykwlDycJTbUvs22HwSuIWk",
  authDomain: "doodle-db.firebaseapp.com",
  projectId: "doodle-db",
  storageBucket: "doodle-db.appspot.com",
  messagingSenderId: "558979954589",
  appId: "1:558979954589:web:088c429f1784e50f7ba174",
  measurementId: "G-LD3PXLNHVK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

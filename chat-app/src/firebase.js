import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDDl25mIwnndTSNqTvX7GdWCA53NI7onU8",
  authDomain: "chatapp-eb72a.firebaseapp.com",
  projectId: "chatapp-eb72a",
  storageBucket: "chatapp-eb72a.appspot.com",
  messagingSenderId: "861934079792",
  appId: "1:861934079792:web:b492aeafd3513a44f602f5"
  }).auth();
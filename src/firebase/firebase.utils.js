import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyAZ9Oks1B_HkWDIDESgQX-zEEGaXL7CbKk",
  authDomain: "owly-shop.firebaseapp.com",
  projectId: "owly-shop",
  storageBucket: "owly-shop.appspot.com",
  messagingSenderId: "883831621608",
  appId: "1:883831621608:web:4ac9a904f3ff280d9b465d",
  measurementId: "G-C5QWKX80Q4",
};

const app = initializeApp(config);
const provider = new GoogleAuthProvider();

export const auth = getAuth();
export const signInWithGoogle = (event) => {
  event.preventDefault();
  signInWithPopup(auth, provider);
};

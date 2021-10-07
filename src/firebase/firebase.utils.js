import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyAZ9Oks1B_HkWDIDESgQX-zEEGaXL7CbKk",
  authDomain: "owly-shop.firebaseapp.com",
  projectId: "owly-shop",
  storageBucket: "owly-shop.appspot.com",
  messagingSenderId: "883831621608",
  appId: "1:883831621608:web:4ac9a904f3ff280d9b465d",
  measurementId: "G-C5QWKX80Q4",
};

initializeApp(config);
const provider = new GoogleAuthProvider();
const db = getFirestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(db, "users", userAuth.uid);
  const snapShot = getDoc(userRef);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

export const auth = getAuth();
export const signInWithGoogle = (event) => {
  event.preventDefault();
  signInWithPopup(auth, provider);
};

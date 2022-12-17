import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4m7VHfM8hy_VUUAlpFCSK3AfrRX4bkQ0",
  authDomain: "react-firebase-auth-d4e6b.firebaseapp.com",
  projectId: "react-firebase-auth-d4e6b",
  storageBucket: "react-firebase-auth-d4e6b.appspot.com",
  messagingSenderId: "1084832623816",
  appId: "1:1084832623816:web:a526bb5b9beff5e26e89fd",
  measurementId: "G-1DXS0RGXPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
}

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
}
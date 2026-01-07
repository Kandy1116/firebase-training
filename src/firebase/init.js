// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0gnrDg-3pWdEMl6TP9lz1Y6WeuRW6z6s",
  authDomain: "fir-training-58642.firebaseapp.com",
  projectId: "fir-training-58642",
  storageBucket: "fir-training-58642.firebasestorage.app",
  messagingSenderId: "1068461173062",
  appId: "1:1068461173062:web:2c78558cc6eddacaeedd47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
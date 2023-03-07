import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrULmz6jdxgordKmurjU-8Y-Vi8Al2ZmM",
  authDomain: "chatgpt-messenger-b183b.firebaseapp.com",
  projectId: "chatgpt-messenger-b183b",
  storageBucket: "chatgpt-messenger-b183b.appspot.com",
  messagingSenderId: "550641827039",
  appId: "1:550641827039:web:911132437151de369efd6a"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
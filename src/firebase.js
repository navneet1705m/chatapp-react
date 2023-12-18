import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwdbtgqTs3Vj2GhdUabCUl1p_ry0a_atE",
  authDomain: "chatappreact-53e91.firebaseapp.com",
  projectId: "chatappreact-53e91",
  storageBucket: "chatappreact-53e91.appspot.com",
  messagingSenderId: "805018934241",
  appId: "1:805018934241:web:cb8fd572c88a8b0c9c10a0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

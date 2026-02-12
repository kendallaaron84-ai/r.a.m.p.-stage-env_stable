import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// STAGING BASELINE - HARDCODED TO PREVENT ENV MISMATCH
const firebaseConfig = {
  apiKey: "AIzaSyD1Kt9EoU0gsS36OKalcikj7IAMYYjyUbE",
  authDomain: "ramp-app-staging-484215.firebaseapp.com",
  projectId: "ramp-app-staging-484215",
  storageBucket: "ramp-app-staging-484215.firebasestorage.app",
  messagingSenderId: "363924041828",
  appId: "1:363924041828:web:ea860de09c2dc326d9af71"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
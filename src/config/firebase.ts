// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //@ts-ignore
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  //@ts-ignore
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  //@ts-ignore
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  //@ts-ignore
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  //@ts-ignore
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  //@ts-ignore
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  //@ts-ignore
  measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const productsCollection = collection(db, "products");
// export const usersCollection = collection(db, "users");
export const auth = getAuth(app);
export const storage = getStorage(app);

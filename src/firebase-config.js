import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsMM3Z-tGNfgZTlAO9Tr21nlyhZL8jUuk",
  authDomain: "film-hub-official.firebaseapp.com",
  projectId: "film-hub-official",
  storageBucket: "film-hub-official.firebasestorage.app",
  messagingSenderId: "863017368992",
  appId: "1:863017368992:web:80ee942d60ba64b5de78c5",
  measurementId: "G-W77J8NFFR7"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const messages_db = "messages";

export { db, messages_db };

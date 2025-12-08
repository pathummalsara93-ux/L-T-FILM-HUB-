import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApzzYTbywpe5Lf-CJ6zNmYk6PLZ3d77c8",
  authDomain: "film-hub-2026.firebaseapp.com",
  projectId: "film-hub-2026",
  storageBucket: "film-hub-2026.firebasestorage.app",
  messagingSenderId: "580032384676",
  appId: "1:580032384676:web:16e6057bb6a0bb5dbb2031",
  measurementId: "G-K67EDQJ62S"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const messages_db = "messages";

export { db, messages_db };

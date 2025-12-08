import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsMM3Z-tGNfgZTlAO9Tr21nlyhZL8jUuk",
  authDomain: "film-hub-official.firebaseapp.com",
  projectId: "film-hub-official",
  storageBucket: "film-hub-official.firebasestorage.app",
  messagingSenderId: "863017368992",
  appId: "1:968673332926:web:6789623a796a769924d8ef",
  measurementId: "G-WX4SKF94PX"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const messages_db = "messages";

export { db, messages_db };

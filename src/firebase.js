import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD4zOXDZ4l6sIBi7sFBw8W084-eWT0JhwM",
  authDomain: "candykoa-c9fe3.firebaseapp.com",
  projectId: "candykoa-c9fe3",
  storageBucket: "candykoa-c9fe3.appspot.com",
  messagingSenderId: "771770189808",
  appId: "1:771770189808:web:16d0d3efa16e1a76f13f35",
  measurementId: "G-E0L67M202M"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

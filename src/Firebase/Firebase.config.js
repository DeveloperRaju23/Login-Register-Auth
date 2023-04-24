
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCSu4JnkDuLM6XqzaGNsXR-AJw-K9xgbRI",
  authDomain: "login-day-01.firebaseapp.com",
  projectId: "login-day-01",
  storageBucket: "login-day-01.appspot.com",
  messagingSenderId: "357288216491",
  appId: "1:357288216491:web:64b02f3d5ed8dac09934ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
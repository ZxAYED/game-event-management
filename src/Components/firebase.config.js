// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC1ILA_ftxKp2ZGuHxvzosPHQAMgMfSWko",
  authDomain: "game-management-e4f2c.firebaseapp.com",
  projectId: "game-management-e4f2c",
  storageBucket: "game-management-e4f2c.appspot.com",
  messagingSenderId: "11838635689",
  appId: "1:11838635689:web:870c40c6b69d7f71f733b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
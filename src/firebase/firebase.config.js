// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2LDXEEQQwuB06sCIA1PJFSVQRE7ZPdVg",
  authDomain: "react-dragon-news-auth-abc30.firebaseapp.com",
  projectId: "react-dragon-news-auth-abc30",
  storageBucket: "react-dragon-news-auth-abc30.appspot.com",
  messagingSenderId: "497691797081",
  appId: "1:497691797081:web:52cc192a28d85206317348"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
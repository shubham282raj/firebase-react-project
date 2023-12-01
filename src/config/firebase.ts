// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8J5xbanWp26UcN7QwkyoNO4G0-rq9SZ8",
  authDomain: "first-react-website-e78e1.firebaseapp.com",
  projectId: "first-react-website-e78e1",
  storageBucket: "first-react-website-e78e1.appspot.com",
  messagingSenderId: "895506010772",
  appId: "1:895506010772:web:55f378f6037eb5e2459a81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider() 
// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCghiqHL1H1il0stzS_P8Raoqzk60Y1b6o",
  authDomain: "pawsnest-ed3e1.firebaseapp.com",
  projectId: "pawsnest-ed3e1",
  storageBucket: "pawsnest-ed3e1.firebasestorage.app",
  messagingSenderId: "1094460786038",
  appId: "1:1094460786038:web:53bcf4cfff90aeb368a657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
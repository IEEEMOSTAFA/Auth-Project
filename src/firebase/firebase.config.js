// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX2KfkzVPy28VAcwVNWxdzdesj8tSv6JA",
  authDomain: "auth-project-b06b0.firebaseapp.com",
  projectId: "auth-project-b06b0",
  storageBucket: "auth-project-b06b0.firebasestorage.app",
  messagingSenderId: "32076421776",
  appId: "1:32076421776:web:2eb33a9ae23ce2fd5dd615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

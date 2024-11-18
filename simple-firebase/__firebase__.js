// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRywrKgEo9zm1OwBWOiNP49Z2nHEj6mAM",
    authDomain: "simple-firebase-cba9d.firebaseapp.com",
    projectId: "simple-firebase-cba9d",
    storageBucket: "simple-firebase-cba9d.firebasestorage.app",
    messagingSenderId: "4370553095",
    appId: "1:4370553095:web:e31fdde481eae7ea5f4da2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;
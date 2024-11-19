// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7-W1I_mRgPDZAzSdPijsZgy9qRg_pALE",
    authDomain: "auth-integration-5c290.firebaseapp.com",
    projectId: "auth-integration-5c290",
    storageBucket: "auth-integration-5c290.firebasestorage.app",
    messagingSenderId: "426874433390",
    appId: "1:426874433390:web:8a5827f4f2a477c6bb5b7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export  default auth;
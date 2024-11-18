import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDdfcoYxH_h8Q2Ntz3N46bcoNlV0QU_xTA",
    authDomain: "simple-firebase-2-2c33e.firebaseapp.com",
    projectId: "simple-firebase-2-2c33e",
    storageBucket: "simple-firebase-2-2c33e.firebasestorage.app",
    messagingSenderId: "50492155850",
    appId: "1:50492155850:web:cad5afc3ef928931ff5133"
}


const app = initializeApp(firebaseConfig);

const auth =getAuth(app)

export default auth;
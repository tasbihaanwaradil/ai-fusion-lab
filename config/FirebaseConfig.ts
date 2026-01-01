// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "ai-fusion-lab-1d831.firebaseapp.com",
    projectId: "ai-fusion-lab-1d831",
    storageBucket: "ai-fusion-lab-1d831.firebasestorage.app",
    messagingSenderId: "499511367446",
    appId: "1:499511367446:web:1b48bb14da99c8fb70a237",
    measurementId: "G-K3FXV6Y8V2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

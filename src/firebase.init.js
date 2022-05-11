// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrKFyGJkVDfCcRS1FHRN0ADnvVFtrK-RY",
    authDomain: "fullstack-assignment11-client.firebaseapp.com",
    projectId: "fullstack-assignment11-client",
    storageBucket: "fullstack-assignment11-client.appspot.com",
    messagingSenderId: "570820513948",
    appId: "1:570820513948:web:dbe40fc1716490a53e1d59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
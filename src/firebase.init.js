// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCToSpeW22QiZcMuMGNZq7yby-xFP-7Emo",
    authDomain: "manufacturer-app-ea238.firebaseapp.com",
    projectId: "manufacturer-app-ea238",
    storageBucket: "manufacturer-app-ea238.appspot.com",
    messagingSenderId: "637195348859",
    appId: "1:637195348859:web:7aabaa8b3e3b4fae1eebde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { enableIndexedDbPersistence, getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBI8TmoUXes9hR4Itowp1hC2kqiBTAB9Q",
    authDomain: "my-portfolio-8e64f.firebaseapp.com",
    projectId: "my-portfolio-8e64f",
    storageBucket: "my-portfolio-8e64f.appspot.com",
    messagingSenderId: "740198111490",
    appId: "1:740198111490:web:545e502e6a283c8e8c8a1b",
    measurementId: "G-L17MSSEBQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
enableIndexedDbPersistence(db).then(() => {
    console.info("Offline persistance enabled")
}).catch((err) => {
    console.error("Error: ", err)
});
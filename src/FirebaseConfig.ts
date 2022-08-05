// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
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

// declare global {
//     // eslint-disable-next-line no-var
//     var FIREBASE_APPCHECK_DEBUG_TOKEN: boolean | string | undefined;
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LeVwEwhAAAAAEfH54cXgV1Otxra5ZQVYtQMZ1my'),
    isTokenAutoRefreshEnabled: true
})
export const auth = getAuth(app);
export const db = getFirestore(app);
enableIndexedDbPersistence(db).then(() => {
    // console.info("Offline persistance enabled")
}).catch((err) => {
    console.error("Error: ", err)
});
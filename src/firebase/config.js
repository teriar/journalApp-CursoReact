// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_6QHgcRB0uhYmzScmOHMVZep95l8Mk5Y",
  authDomain: "react-cursos-26ab4.firebaseapp.com",
  projectId: "react-cursos-26ab4",
  storageBucket: "react-cursos-26ab4.appspot.com",
  messagingSenderId: "358537456329",
  appId: "1:358537456329:web:2b044253437ed03df8bb18"
};

// Initialize Firebase
 export const FirebaseApp = initializeApp(firebaseConfig);

 export const FirebaseAuth = getAuth(FirebaseApp);

 export const FireBaseDB = getFirestore(FirebaseApp)
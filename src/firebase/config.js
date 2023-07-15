// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlIfO_rSx7NCWiAXwiBp5KO-ugsef9PN4",
  authDomain: "don-remolo-2-0.firebaseapp.com",
  projectId: "don-remolo-2-0",
  storageBucket: "don-remolo-2-0.appspot.com",
  messagingSenderId: "481940184644",
  appId: "1:481940184644:web:1671ae39f0e90d70676611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseConnection = () => app

export default firebaseConnection
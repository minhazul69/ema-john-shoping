// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  apiKey: "AIzaSyA8Df4zlPbTJArXlwTaipD-adVm-G98yBA",
  authDomain: "ema-john-shopping-841d1.firebaseapp.com",
  projectId: "ema-john-shopping-841d1",
  storageBucket: "ema-john-shopping-841d1.appspot.com",
  messagingSenderId: "418069609128",
  appId: "1:418069609128:web:2ed37aa242641a7a12609d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

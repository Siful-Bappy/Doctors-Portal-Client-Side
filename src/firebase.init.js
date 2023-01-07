// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID
// };
const firebaseConfig = {
  apiKey: "AIzaSyAkOA0KetEj22ncWP84pjqZoBWOzNjJJXI",
  authDomain: "doctors-portal-1cdf0.firebaseapp.com",
  projectId: "doctors-portal-1cdf0",
  storageBucket: "doctors-portal-1cdf0.appspot.com",
  messagingSenderId: "960029723357",
  appId: "1:960029723357:web:99bbc469ffea09115fa934",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
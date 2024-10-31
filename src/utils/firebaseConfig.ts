import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpCkGqNRgPUKNYEAaJKM6-KpbStHGCLtM",
  authDomain: "pokedex-1bb67.firebaseapp.com",
  projectId: "pokedex-1bb67",
  storageBucket: "pokedex-1bb67.firebasestorage.app",
  messagingSenderId: "664655321486",
  appId: "1:664655321486:web:58e1f7e2d60f1584496cdf",
  measurementId: "G-PM53Y4XRLH"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");

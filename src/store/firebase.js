// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1hu9-7r6MYWUx_FYukTBWQ8sV91NseGE",
  authDomain: "paws-b59ae.firebaseapp.com",
  databaseURL:
    "https://paws-b59ae-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "paws-b59ae",
  storageBucket: "paws-b59ae.appspot.com",
  messagingSenderId: "504682335142",
  appId: "1:504682335142:web:10b3d9df6044dae6bf9d67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

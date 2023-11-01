// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const { getDownloadURL } = require("firebase/storage");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArULi7jvw6EFPUzoAwdiYO6Zcp3pVlnlQ",
  authDomain: "notification-service-c0152.firebaseapp.com",
  databaseURL: "https://notification-service-c0152-default-rtdb.firebaseio.com",
  projectId: "notification-service-c0152",
  storageBucket: "notification-service-c0152.appspot.com",
  messagingSenderId: "46370677815",
  appId: "1:46370677815:web:e47a5ccff827de70c9cbb2",
  measurementId: "G-05T98VYZJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
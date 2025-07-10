// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB46XkO9Udw-AYxOFMBgB4MQWNVa0-3090",
  authDomain: "netflixgpt-64a65.firebaseapp.com",
  projectId: "netflixgpt-64a65",
  storageBucket: "netflixgpt-64a65.firebasestorage.app",
  messagingSenderId: "233328032826",
  appId: "1:233328032826:web:f3e39d977dbad5b4808903",
  measurementId: "G-L08RH4S013",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

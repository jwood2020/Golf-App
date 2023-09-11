// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJpB-1kMarglZMzClqlWfTpgkW-l0cMJs",
  authDomain: "golf-app-26711.firebaseapp.com",
  projectId: "golf-app-26711",
  storageBucket: "golf-app-26711.appspot.com",
  messagingSenderId: "122004630049",
  appId: "1:122004630049:web:732fb4a5cef2fc7d619160",
  measurementId: "G-MHLQV05XHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default app;
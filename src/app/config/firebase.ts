import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDz3YCz6smUi_RYXcHO7owNZOQjMD_Izp0",
  authDomain: "react-fi-948e8.firebaseapp.com",
  projectId: "react-fi-948e8",
  storageBucket: "react-fi-948e8.appspot.com",
  messagingSenderId: "841239580717",
  appId: "1:841239580717:web:1581365b98cd5189d828a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
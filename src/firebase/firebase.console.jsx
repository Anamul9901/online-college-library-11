import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAT7-qO4qM_DIPkIEUFB4CqTX8h00b6BGI",
  authDomain: "assignment-11-22b1b.firebaseapp.com",
  projectId: "assignment-11-22b1b",
  storageBucket: "assignment-11-22b1b.appspot.com",
  messagingSenderId: "411669054893",
  appId: "1:411669054893:web:dac545f840fc23d0bb8d24"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
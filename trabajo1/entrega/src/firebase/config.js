import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCqmURExvrXGq_nArePnVtt8Ze_DCc1g6o",
  authDomain: "react-js-94dc2.firebaseapp.com",
  projectId: "react-js-94dc2",
  storageBucket: "react-js-94dc2.appspot.com",
  messagingSenderId: "802237074045",
  appId: "1:802237074045:web:f8aa649927b27b30a8bf14",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpq55mmauHCv2bMp_ipUlo4i3nQDLvQNc",
  authDomain: "testimonios-32a83.firebaseapp.com",
  projectId: "testimonios-32a83",
  storageBucket: "testimonios-32a83.appspot.com",
  messagingSenderId: "1059018302484",
  appId: "1:1059018302484:web:a99f7c6a38728af9ac7301"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
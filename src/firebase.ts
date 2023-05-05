import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAiB6gtRkrUAOifEFPMBohZFSDQV3VjRk",
  authDomain: "poke-app-cb1a5.firebaseapp.com",
  projectId: "poke-app-cb1a5",
  storageBucket: "poke-app-cb1a5.appspot.com",
  messagingSenderId: "410075831999",
  appId: "1:410075831999:web:cf15c645862921cc4ab00a",
  measurementId: "G-DSQZ32TXCL",
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

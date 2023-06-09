import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAIY-l6Qp9NfdNmiC6jnTKEHr5AlKFwuOs",

  authDomain: "revise-philosophy.firebaseapp.com",

  databaseURL: "https://revise-philosophy-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "revise-philosophy",

  storageBucket: "revise-philosophy.appspot.com",

  messagingSenderId: "53795950517",

  appId: "1:53795950517:web:203d5582df1a12951f13fc"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
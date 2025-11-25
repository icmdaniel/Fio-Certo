import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAINZiFRep2cG8KyorP5_bi2lSEqSFoI_Q",
  authDomain: "fio-certo.firebaseapp.com",
  projectId: "fio-certo",
  storageBucket: "fio-certo.firebasestorage.app",
  messagingSenderId: "152915023014",
  appId: "1:152915023014:web:4b5f338ec6abcc71cbd067"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

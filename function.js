import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, doc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
// Import Firestore, okay to copy

const firebaseConfig = {
  apiKey: "AIzaSyDw-HhDe-1hh_eG3qMNf0yS-LM5u5EvfXY",
    authDomain: "practice-bc24d.firebaseapp.com",
    databaseURL: "https://practice-bc24d-default-rtdb.firebaseio.com",
    projectId: "practice-bc24d",
    storageBucket: "practice-bc24d.firebasestorage.app",
    messagingSenderId: "620317685838",
    appId: "1:620317685838:web:596233d92a39f33469ab1f",
    measurementId: "G-1P5V0BWF9Y"
};
// Connect and authorize your specific database

const app initializeApp(firebaseConfig);
const db getFirestore(app);

const input = getElementById("input");

input.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {

    await setDoc(doc(db, "messages", "latest"), { text: input.value });
  }
}
const output = getElementById("output");
onSnapshot(doc(db, "messages", "latest"), docSnap => {
  if (docSnap.exists()) {
    output.textContent = docSnap.data().text;
    }
  }
);

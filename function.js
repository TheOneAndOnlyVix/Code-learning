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

//finish connecting firestore database

const input = getElementById("input");

input.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
//executes if enter is pressed
    await setDoc(doc(db, "messages", "latest"), { text: input.value });
    // writes to a document: ID latest in collection messages
    //setDoc overwrites everything that was in it and replaces it with input's value
    //await lets the entire thing finish, necessary for network requests which take time
  }
}
const output = getElementById("output");
onSnapshot(doc(db, "messages", "latest"), docSnap => {
  //checks back to the same document, onSnapshot so it re-runs whenever the document changes
  if (docSnap.exists()) {
    //ensures document exists to avoid error
    output.textContent = docSnap.data().text;
    }
  }
);

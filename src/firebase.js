import firebase from "firebase/app";
import "firebase/firestone";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBLfdLbvajH72_ntvhlpj3grmC8aP03ehk",
  authDomain: "just-todo-it-a5f9d.firebaseapp.com",
  projectId: "just-todo-it-a5f9d",
  storageBucket: "just-todo-it-a5f9d.appspot.com",
  messagingSenderId: "210391303178",
  appId: "1:210391303178:web:fc8068f527588e2e6fcbf3",
});

export { firebaseConfig as firebase };

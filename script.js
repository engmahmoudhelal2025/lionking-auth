import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBUvtSyXPND1q29rwXr0QWONJPLpj0JIuQ",
  authDomain: "lionking-c06fb.firebaseapp.com",
  projectId: "lionking-c06fb",
  storageBucket: "lionking-c06fb.appspot.com",
  messagingSenderId: "219874685776",
  appId: "1:219874685776:web:47c6f9417ca79dfc07b255",
  measurementId: "G-S6RG5SCLC5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("google-signin").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      document.getElementById("user-info").innerHTML = `
        <p>Hello, ${user.displayName}!</p>
        <img src="${user.photoURL}" width="50" height="50" />
      `;
    })
    .catch(error => {
      console.error(error);
    });
});

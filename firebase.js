// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBUvtSyXPND1q29rwXr0QWONJPLpj0JIuQ",
  authDomain: "lionking-c06fb.firebaseapp.com",
  projectId: "lionking-c06fb",
  storageBucket: "lionking-c06fb.appspot.com",
  messagingSenderId: "219874685776",
  appId: "1:219874685776:web:47c6f9417ca79dfc07b255"
};

firebase.initializeApp(firebaseConfig);

// Sign in with Google
const signInBtn = document.getElementById("signInBtn");

if (signInBtn) {
  signInBtn.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        // Redirect after successful login
        window.location.href = "/dashboard";
      })
      .catch(error => {
        console.error("Error during sign-in:", error);
        alert("Login failed. Please try again.");
      });
  });
}

// Check login status (optional)
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("User logged in:", user.displayName);
  } else {
    console.log("No user is logged in.");
  }
});

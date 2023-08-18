//  =========cdn import firebase without install ==========
 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";


 const firebaseConfig = {
   apiKey: "AIzaSyAaK5bcYzr-9RgVOLrm4Q1rCXEgKjvYHuo",
   authDomain: "authentication-page-a1b90.firebaseapp.com",
   projectId: "authentication-page-a1b90",
   storageBucket: "authentication-page-a1b90.appspot.com",
   messagingSenderId: "90293539531",
   appId: "1:90293539531:web:e747ee388b5b569b09c14e"
 };

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export {app , auth}
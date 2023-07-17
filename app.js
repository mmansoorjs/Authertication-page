//  =========cdn import firebase without install ==========
 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
 import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification,signOut  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";


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






  //============ new User add work=========

  let signUpEmail = document.querySelectorAll(".sigup-email")[0];
  let signUpPassword = document.querySelectorAll(".sigup-password")[0];
  let signUpBtn = document.querySelectorAll(".sigup")[0];
  let userName = document.querySelectorAll(".user-name")[0];
  let errorMsg = document.querySelectorAll(".error-msg")[0];




let newUser = ()=>{

    createUserWithEmailAndPassword(auth, signUpEmail.value, signUpPassword.value)
    .then((res) => {
      const user = res.user;
      console.log(user)
      
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if(errorCode==='auth/invalid-email'){
          errorMsg.innerHTML='Invalid-Email'
      }
      else if(errorCode==='auth/weak-password'){
          errorMsg.innerHTML='Weak-Password'
      }
      else if(errorCode==='auth/email-already-in-use'){
        errorMsg.innerHTML='Email-already-in-use'
    }

           console.log(errorCode)
    });

    
    signUpEmail.value='';
    signUpPassword.value='';
    userName.value='';

}

signUpBtn.addEventListener('click',newUser)



// ============log in work=============

let logInEmail = document.querySelectorAll(".login-email")[0];
let logInPassword = document.querySelectorAll(".login-password")[0];
let logInBtn = document.querySelectorAll(".log")[0];
let err = document.querySelectorAll(".err-msg")[0];
let verify = document.querySelectorAll(".Data")[0];
let main = document.querySelectorAll(".main")[0];
let verifyBtn = document.querySelectorAll(".verify-btn")[0];
let Symbol = document.querySelectorAll(".Symbol")[0];


   let userLogin = ()=>{
    signInWithEmailAndPassword(auth, logInEmail.value, logInPassword.value)
  .then((res)  => {

    const user = res.user;
    console.log(user)

    verify.style.display='block'
    main.style.display='none'


    if(user.emailVerified===true){
      Symbol.style.color='green'
      Symbol.innerHTML= `&#10004`;
      verifyBtn.style.display='none';
    }
    else{
      console.log("verification false")
      // verifyBtn.style.display='block'
    }

   })

    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    if(errorCode==='auth/wrong-password'){
      err.innerHTML='Wrong-Password'
    }

     else if(errorCode==='auth/invalid-email'){
     err.innerHTML='Invalid-Email'
   }

   else if(errorCode==='auth/user-not-found'){
   err.innerHTML='User-Not-Found' 
  }

  else if (errorCode==='auth/network-request-failed'){
    err.innerHTML ='network-request-failed'
  }

    console.log(errorCode)
  });
  
  logInEmail.value='';
  logInPassword.value='';
}

logInBtn.addEventListener('click',userLogin)



// ==============sign out work==============

let logout = document.querySelectorAll(".log-out")[0];


logout.addEventListener('click' ,()=>{
  
  signOut(auth).then(() => {
    // console.log('gaya')
    verify.style.display='none'
    main.style.display='block'

  }).catch((error) => {
    console.log(error)
  });
  
})




//============ sentVerification work============

let sentVerification = ()=>{

sendEmailVerification(auth.currentUser)
 .then(() => {

  // console.log(auth.currentUser);
});


}

// window.sendEmailVerification=sendEmailVerification;

verifyBtn.addEventListener('click' , sentVerification)
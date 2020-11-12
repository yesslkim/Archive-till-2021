// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnGOqRUDdgsQaChFx64sXFuUIDgUoxqxk",
  authDomain: "monet-garden.firebaseapp.com",
  databaseURL: "https://monet-garden.firebaseio.com",
  projectId: "monet-garden",
  storageBucket: "monet-garden.appspot.com",
  messagingSenderId: "692803663657",
  appId: "1:692803663657:web:5abd1938cf7ec9b5252938"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth();
firebase.firestore();

const auth = firebase.auth();

// auth status 
auth.onAuthStateChanged(user=>{
  if(user){
    statusUI(user);
  }else {
    statusUI();
  }
})

//login
const loginForm = document.querySelector('.login_form');
loginForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const email = loginForm.login_id.value;
  const password = loginForm.login_pwd.value;
  const loginError = document.querySelector('.login_error');

  auth.signInWithEmailAndPassword(email,password).then(cred=>{
    loginModal.classList.remove('active');

    // reset login form 
    loginForm.reset();
    loginError.classList.remove('active');

   }).catch(error=>{
    const errorCode = error.code;
    if(errorCode){
      loginError.classList.add('active')
    }
    console.log(error.message)
  })  
})

//logout
logoutMenu.addEventListener('click',(e)=>{
  e.preventDefault();
  auth.signOut();
})

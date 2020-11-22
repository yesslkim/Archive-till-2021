// global variable 
const auth = firebase.auth();
const db = firebase.firestore();

const authStateEvent = () => {
  auth.onAuthStateChanged(user=>{
    if(user){
      statusUI(user);
    }else {
      statusUI();
    }
  })
}

const loginStateEvent = () => {
  const loginForm = document.querySelector('.login_form');
  loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = loginForm.login_id.value;
    const password = loginForm.login_pwd.value;
    const loginError = document.querySelector('.login_error');
  
    auth.signInWithEmailAndPassword(email,password).then(()=>{
      loginModal.classList.remove('active');
  
      loginForm.reset();
      loginError.classList.remove('active');
      loginHelp.classList.remove('active');
      enableScroll();
     }).catch(error=>{
      const errorCode = error.code;
      if(errorCode){
        loginError.classList.add('active')
      }
      console.log(error.message)
    })  
  })
}

const logoutStateEvent = () =>{
  logoutMenu.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut();
  })
} 

window.addEventListener('DOMContentLoaded', () => {
  authStateEvent();
  loginStateEvent();
  logoutStateEvent();
})





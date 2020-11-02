const auth = firebase.auth();
const db = firebase.firestore();
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

    //change login => logout ( going to replace login button into logout button)
    loginLink.textContent = 'Log Out';
    loginLink.classList.replace('login_link','logout_link');

   }).catch(error=>{
    const errorCode = error.code;
    if(errorCode){
      loginError.classList.add('active')
    }
    console.log(error.message)
  })  
})
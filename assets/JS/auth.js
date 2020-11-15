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
  
    auth.signInWithEmailAndPassword(email,password).then(cred=>{
      loginModal.classList.remove('active');
  
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
}

const logoutStateEvent = () =>{
  logoutMenu.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut();
  })
} 

const createNewPost = () => {
  const postForm = document.querySelector('.post_form');

  postForm.addEventListener('submit',(e)=>{
    const user = auth.currentUser;
    const date = new Date().toLocaleDateString();
   
    e.preventDefault();
    
    db.collection('post').add({
      title: postForm['post_title'].value,
      content: postForm['post_desc'].value,
      userID: user.email,
      date: date,
      views: 0
    }).then(()=>{
      postForm.classList.remove('active');
      postForm.reset();
    }).catch(error=>{
      console.log(error.message)
      if(error.message ==='Missing or insufficient permissions.'){
        alert('로그인 후 글쓰기가 가능합니다.')
      }
    }) 
  })
}

window.addEventListener('DOMContentLoaded', () => {
  authStateEvent();
  loginStateEvent();
  logoutStateEvent();
  createNewPost();
})





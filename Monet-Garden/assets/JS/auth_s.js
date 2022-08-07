// global variable 
const auth = firebase.auth();
const db = firebase.firestore();
let isOnline;

const authStateEvent = () => {
  auth.onAuthStateChanged(user=>{
    if(user){
      isOnline = true;
      statusUI(user);
      db.collection('posts').orderBy('createdAt').onSnapshot(snapshot=>{
        socialWallUI(snapshot.docs);
      })
      openPostForm(user);

    }else {
      isOnline = false;
      statusUI();
      db.collection('posts').orderBy('createdAt').onSnapshot(snapshot=>{
        socialWallUI(snapshot.docs);
      })
      openPostForm()
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
      alert(`${email.split('@')[0]}님 환영합니다`);
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
    alert('로그아웃 되었습니다');
    auth.signOut();
  })
} 

window.addEventListener('DOMContentLoaded', () => {
  authStateEvent();
  loginStateEvent();
  logoutStateEvent();
})





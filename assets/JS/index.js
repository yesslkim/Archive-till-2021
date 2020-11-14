// global variable 
const loginMenu = document.querySelector('.login_link');
const logoutMenu = document.querySelector('.logout_link');
const loginModal = document.querySelector('.login_wrapper');

//scrolltop nav event 
const scrollTopEvent = () => {
  window.addEventListener('scroll',()=>{
    const scrollTop = document.querySelector('.scrolltop');
    if(window.pageYOffset>'100'){
      scrollTop.classList.add('active')
    }else {
      scrollTop.classList.remove('active')
    }
  })
}

//global navigation menu event 
const gnbEvent = () => {
  const gnbButton = document.querySelector('.gnb_btn');

  gnbButton.addEventListener('click', () => {
    const gnbList = document.querySelector('.gnb_list');
    gnbList.classList.toggle('active')
  })
}

//login modal Event
const loginModalEvent = () => {
  const loginModal = document.querySelector('.login_wrapper');
  const closeButton = document.querySelector('.close_btn');

  loginMenu.addEventListener('click', ()=>{
    loginModal.classList.add('active');
  })
  
  closeButton.addEventListener('click', ()=>{
    loginModal.classList.remove('active');
  })
}

//login/Logout Status UI
const statusUI = (user)=> {
  if(user){
    loginMenu.parentElement.classList.add('hidden');
    logoutMenu.parentElement.classList.remove('hidden');
  }else {
    loginMenu.parentElement.classList.remove('hidden');
    logoutMenu.parentElement.classList.add('hidden');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  scrollTopEvent()
  gnbEvent()
  loginModalEvent();
})
//scrolltop nav event 

window.addEventListener('scroll',()=>{
  const scrollTop = document.querySelector('.scrolltop');
  if(window.pageYOffset>'100'){
    scrollTop.classList.add('active')
  }else {
    scrollTop.classList.remove('active')
  }
})

//navigation menu event 
const gnbButton = document.querySelector('.gnb_btn');

gnbButton.addEventListener('click', () => {
	const gnbList = document.querySelector('.gnb_list');
	gnbList.classList.toggle('active')
})


const loginMenu = document.querySelector('.login_link');
const logoutMenu = document.querySelector('.logout_link');

//in login modal
const loginModal = document.querySelector('.login_wrapper');
const loginButton = document.querySelector('.login_btn');
const closeButton = document.querySelector('.close_btn');

loginMenu.addEventListener('click', ()=>{
  loginModal.classList.add('active');
})

closeButton.addEventListener('click', ()=>{
  loginModal.classList.remove('active');
})

const statusUI = (user)=> {
  if(user){
    loginMenu.parentElement.classList.add('hidden');
    logoutMenu.parentElement.classList.remove('hidden');
  }else {
    loginMenu.parentElement.classList.remove('hidden');
    logoutMenu.parentElement.classList.add('hidden');
  }
}
//make navbar transpaent 
window.addEventListener('scroll',()=>{
  const navBar = document.querySelector('.js-nav')
  const fristSectionHeight = document.querySelector('.intro-section').getBoundingClientRect().height;
  const pos = window.pageYOffset;

  if(pos>fristSectionHeight){
    navBar.classList.add('fade-in')
    }else {
    navBar.classList.remove('fade-in')
    }
})
                                                                                                                                 

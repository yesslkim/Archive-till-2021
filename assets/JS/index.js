//scrolltop nav event 

window.addEventListener('scroll',()=>{
  const scrollTop = document.querySelector('.scrolltop');
  console.log(scrollTop);
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


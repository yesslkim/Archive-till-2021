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

//Login modal pop up event
const loginLink = document.querySelector('.login_link');
const loginButton = document.querySelector('.login_btn');
const closeButton = document.querySelector('.close_btn');
const loginModal = document.querySelector('.login_wrapper');

loginLink.addEventListener('click', ()=>{
  loginModal.classList.add('active');
})

closeButton.addEventListener('click', ()=>{
  loginModal.classList.remove('active');
})

//fetching art data 

const renderArts = async () => {
  let uri = 'https://my-json-server.typicode.com/yesslkim/monet-garden-api/arts';
  const res = await fetch(uri);
  const arts = await res.json();
  
  arts.forEach(art => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    if(art.id <= 10){
      const ul = document.querySelector('.gallery_top');     
      img.src = art.image;
      img.alt = art.title;
      li.append(img);
      ul.append(li);
    }else if(art.id <= 20){
      const ul = document.querySelector('.gallery_middle');
      img.src = art.image;
      img.alt = art.title;
      li.append(img);
      ul.append(li);
    }else {
      const ul = document.querySelector('.gallery_bottom');
      img.src = art.image;
      img.alt = art.title;
      li.append(img);
      ul.append(li);
    }


  })
}

window.addEventListener('DOMContentLoaded', () => renderArts())

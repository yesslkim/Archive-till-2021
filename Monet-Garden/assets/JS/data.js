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
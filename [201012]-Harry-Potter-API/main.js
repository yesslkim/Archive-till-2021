//Get Items using Fetch API

const getItem = async() => {
  const response = await fetch('http://hp-api.herokuapp.com/api/characters');
  const data = response.json()
  return data;
}

const createHTMLTemplate = (item) => {
  return `
  <li class="character-list">
  <img src=${item.image} alt=${item.name} class="character-img">
  <p class="character-desc">
    Name : ${item.name} <br/>
    Gender : ${item.gender} <br/>
    House : ${item.house}
  </p>
</li>
  `
}

const displayCharacters = (items) => {
  const characterContainer = document.querySelector('.characters')
  characterContainer.innerHTML = items.map(item => createHTMLTemplate(item)).join('');
}

getItem()
.then(items => displayCharacters(items))
.catch(err=>console.log(err))
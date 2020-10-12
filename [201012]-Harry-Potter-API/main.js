//Get characters using Fetch API
const getCharacters = async() => {
  const response = await fetch('http://hp-api.herokuapp.com/api/characters');
  const characters = await response.json()
  return characters;
}

//template for displaying 
const createHTMLTemplate = (character) => {
  return `
  <li class="character-list">
  <img src=${character.image} alt=${character.name} class="character-img">
  <p class="character-desc">
    Name : ${character.name} <br/>
    Gender : ${character.gender} <br/>
    House : ${character.house}
  </p>
</li>
  `
}

//display character in HTML file
const displayCharacters = (characters) => {
  const characterContainer = document.querySelector('.characters')
  characterContainer.innerHTML = characters.map(character => createHTMLTemplate(character)).join('');
}

//search the characters

const searchBar = document.querySelector('.js-search');
const filterCharacters = (characters) => {
  searchBar.addEventListener('keyup',(e)=>{
    const searchValue = e.target.value.toUpperCase().trim();
    const filteredValue = characters.filter(character => {
      const characterName = character.name.toUpperCase().trim();
      return characterName.includes(searchValue);
    })
    displayCharacters(filteredValue);
    })
}

getCharacters()
.then(
  characters => {
  displayCharacters(characters)
  filterCharacters(characters)
  })
.catch(err => console.log(err))




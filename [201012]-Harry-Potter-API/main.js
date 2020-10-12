//Get Items using Fetch API

const getItem = async() => {
  const response = await fetch('http://hp-api.herokuapp.com/api/characters');
  const data = response.json()
  return data;
}

getItem()
.then(items => displayCharacters(items))
.catch(err=>console.log(err))
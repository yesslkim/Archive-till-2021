import { v4 as uuidv4 } from 'uuid';

const music = () => {
  return[
    {
      name:'Sunrise in Paris',
      artist:'Dan Henig',
      cover:'https://images.unsplash.com/photo-1509460256263-94d60ef7f280?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: true,
      colors: ['#542d15','#353821'],
      audio: './assets/music/SunriseinParis-DanHenig.mp3'
    },
    {
      name:'QuangerineCream',
      artist:'Noir Et Blanc Vie',
      cover:'https://images.unsplash.com/photo-1602532769069-0e856a643e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#d27e1d','#e7b69f'],
      audio: './assets/music/QuangerineCream-NoirEtBlancVie.mp3'
    },
    {
      name:'TrueArtRealAffectionPart4',
      artist:'Noir Et Blanc Vie',
      cover:'https://images.unsplash.com/photo-1526310627-0c148cd49f80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#3d656a','#8aa0b4'],
      audio: './assets/music/TrueArtRealAffectionPart4-NoirEtBlancVie.mp3'
    },
    {
      name:'Eternal Garden',
      artist:'Dan Henig',
      cover:'https://images.unsplash.com/photo-1571930998273-2d08ed18b1af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#e46a66','#4d5532'],
      audio: './assets/music/EternalGarden-DanHenig.mp3'
    },
    {
      name:'Hot Hop Rok',
      artist:'Steve Adams',
      cover:'https://images.unsplash.com/photo-1588260411006-a2605a79d788?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#ec9d9a','#01474f'],
      audio: './assets/music/HotHopRok-SteveAdams.mp3'
    },
    {
      name:'Peacefully',
      artist:'Dan Henig',
      cover:'https://images.unsplash.com/photo-1549321041-8fabe2602d1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#c2a799','#8eaaba'],
      audio: './assets/music/Peacefully-EsJammyJams.mp3'
    },
    {
      name:'Three Wise People',
      artist:"E's Jammy Jams",
      cover:'https://images.unsplash.com/photo-1468022536934-b938a806e490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#fb9a50','#dfcac6'],
      audio: './assets/music/ThreeWisePeople-EsJammyJams.mp3'
    },
    {
      name:'Wallflowers',
      artist:'Bad Snacks',
      cover:'https://images.unsplash.com/photo-1599843368794-fd25e66bfeec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#e6a393','#9f796d'],
      audio: './assets/music/Wallflowers-BadSnacks.mp3'
    },
    {
      name:"Kate's Waltz",
      artist:'Bad Snacks',
      cover:'https://images.unsplash.com/photo-1598456448049-1c68e921e8ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#e2e2e2','#2a2a2a'],
      audio: './assets/music/KatesWaltz-BadSnacks.mp3'
    },
    {
      name:'Pastoral',
      artist:'Asher Fulero',
      cover:'https://images.unsplash.com/photo-1518862728982-b31cdc14dc15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      id: uuidv4(),
      active: false,
      colors: ['#263f5b','#738292'],
      audio: './assets/music/Pastoral-AsherFulero.mp3'
    },
  ]
}

export default music;

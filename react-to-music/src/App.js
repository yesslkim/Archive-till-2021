import React, {useState} from 'react';
// style 
import './styles/app.scss';
// components 
import Player from './components/player';
import Song from './components/song';
//util
import music from './data';

function App() {
  const [songs,setSongs] = useState(music());
  const [curretSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={curretSong}/>
      <Player />
    </div>
  );
}

export default App;

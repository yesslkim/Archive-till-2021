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
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;

import React, {useState} from 'react';
// style 
import './styles/app.scss';
// components 
import Player from './components/player';
import Song from './components/song';
import Library from './components/library'
//util
import music from './data';

function App() {
  const [songs,setSongs] = useState(music());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library songs={songs}/>
    </div>
  );
}

export default App;

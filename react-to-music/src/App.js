import React, {useState,useRef} from 'react';
// style 
import './styles/app.scss';
// components 
import Player from './components/player';
import Song from './components/song';
import Library from './components/library';
import Header from './components/header';
//util
import music from './data';

function App() {
  const audioRef = useRef(null);

  const [songs,setSongs] = useState(music());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
      currentTime: 0,
      duration: 0
  })
  const [libraryStatus, setLibraryStatus] = useState(false);
  return (
    <div className="App">
      <Header libraryStatue={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} audioRef={audioRef} songInfo={songInfo} setSongInfo={setSongInfo} />
      <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
    </div>
  );
}

export default App;

import React from 'react';
// style 
import './styles/app.scss';
// components 
import Player from './components/player';
import Song from './components/song';

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;

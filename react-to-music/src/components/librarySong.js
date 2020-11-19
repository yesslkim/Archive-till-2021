import React from 'react';

const LibrarySong = ({song,setCurrentSong,audioRef,isPlaying}) => {
  const songSelectHandler = () =>{
    setCurrentSong(song);
    if(isPlaying){
      const playPromise = audioRef.current.play();
      if(playPromise !== undefined){
        playPromise.then(() => audioRef.current.play())
      }
    }else{
      
    }
  }
  return(
    <div onClick={songSelectHandler} className="library-song">
      <img src={song.cover} alt={song.name}/>
      <div className="song-desc">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong;
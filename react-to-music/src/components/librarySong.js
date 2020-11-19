import React from 'react';

const LibrarySong = ({song, songs, setCurrentSong,audioRef,isPlaying, setSongs}) => {
  const songSelectHandler = () =>{
    setCurrentSong(song);
    //add active state
    const activeStateOfSongs = songs.map(eachSong=> {
      if(eachSong.id === song.id){
        return {
          ...eachSong,
          active: true,
        }
      }else {
        return {
          ...eachSong,
          active: false
        }
      }
    })
    setSongs(activeStateOfSongs);

    // to play song at right time
    if(isPlaying){
      const playPromise = audioRef.current.play();
      if(playPromise !== undefined){
        playPromise.then(() => audioRef.current.play())
      }
    }
  }
  return(
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
      <img src={song.cover} alt={song.name}/>
      <div className="song-desc">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong;
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPause, faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, songs, setCurrentSong, setSongs}) => {
  //event
  const playSongHandler = () => {
    if(isPlaying){
      audioRef.current.pause();
      setIsPlaying(!isPlaying)
    }else {
      audioRef.current.play();
      setIsPlaying(!isPlaying)
    }
  }

  const getTime = (time) => {
    return Math.floor(time/60)+ ':' + ("0" + Math.floor(time % 60)).slice(-2);
  }

  const dragHandler = (e) =>{
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, currentTime: e.target.value})
  }

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration})
  }

  const skipTrackHandler = async(direction) =>{
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    let newIndex = currentIndex + direction;
    if(direction){
      activeLibraryHandler(songs[(currentIndex+1) % songs.length]);
    }
    if(newIndex < 0){
      newIndex = songs.length -1
    }else if(newIndex >= songs.length){
      newIndex = 0;
    }
    await setCurrentSong(songs[newIndex]);
    if(isPlaying) audioRef.current.play();
  }

  const activeLibraryHandler = (prevOrNext) =>{
    const activeStateOfSongs = songs.map(eachSong=> {
      if(eachSong.id === prevOrNext.id){
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
  }

  const songEndHandler = async() =>{
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if(isPlaying) audioRef.current.play();
  }

  return(
    <div className="player-container">
      <div className="time-control">
        <span>{getTime(songInfo.currentTime)}</span>
        <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} type="range"/>
        <span>{songInfo.duration? getTime(songInfo.duration) : '0:00'}</span>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="prev" onClick={()=> skipTrackHandler(-1)} size="2x" icon={faAngleLeft}/>
        <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x"  icon={isPlaying? faPause : faPlay}/>
        <FontAwesomeIcon className="next" onClick={()=> skipTrackHandler(1)} size="2x"  icon={faAngleRight}/>
      </div>
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio} onEnded={songEndHandler}></audio>
    </div>
  )
}

export default Player;
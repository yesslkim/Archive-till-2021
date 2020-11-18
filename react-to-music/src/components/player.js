import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
  const audioRef = useRef(null);
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

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration})
  }

  const getTime = (time) => {
    return Math.floor(time/60)+ ':' + ("0" + Math.floor(time % 60)).slice(-2);
  }

  //state
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null
  })
  return(
    <div className="player-container">
      <div className="time-control">
        <span>{getTime(songInfo.currentTime)}</span>
        <input type="range"/>
        <span>{getTime(songInfo.duration)}</span>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="prev" size="2x" icon={faAngleLeft}/>
        <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x"  icon={faPlay}/>
        <FontAwesomeIcon className="next" size="2x"  icon={faAngleRight}/>
      </div>
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  )
}

export default Player;
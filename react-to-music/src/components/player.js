import React, {useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong}) => {
  const audioRef = useRef(null);
  //event
  const playSongHandler = () => {
    console.log(audioRef.current)
  }
  return(
    <div className="player-container">
      <div className="time-control">
        <span>start time</span>
        <input type="range"/>
        <span>end time</span>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="prev" size="2x" icon={faAngleLeft}/>
        <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x"  icon={faPlay}/>
        <FontAwesomeIcon className="next" size="2x"  icon={faAngleRight}/>
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  )
}

export default Player;
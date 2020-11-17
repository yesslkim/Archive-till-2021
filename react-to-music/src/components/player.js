import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = () => {
  return(
    <div className="player">
      <div className="time-control">
        <span>start time</span>
        <input type="range"/>
        <span>end time</span>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="prev" size="2x" icon={faAngleLeft}/>
        <FontAwesomeIcon className="play" size="2x"  icon={faPlay}/>
        <FontAwesomeIcon className="next" size="2x"  icon={faAngleRight}/>
      </div>
    </div>
  )
}

export default Player;
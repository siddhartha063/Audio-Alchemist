import React from 'react'
import Control from './Control'
import Details from './Details'

const Player = () => {
  return (
    <div className="player">
        <h4>Playing Now</h4>
        <Details/>
        <Control/>
        <audio src="" className="player__audio" controls ></audio>
        <p>
            Next Up : <span>Next Song</span>
        </p>
    </div>
  )
}

export default Player
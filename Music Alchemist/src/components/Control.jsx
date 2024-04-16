import React from 'react'
import {faBackward, faForward , faPause} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Control = () => {
  return (
    <div className='control'>
        <button className='control__SkipBtn'>
            <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className="control__PlayButton">
            <FontAwesomeIcon icon={faPause} />
        </button>
        <button className="control__SkipBtn">
            <FontAwesomeIcon icon={faForward} />
        </button>
    </div>
  )
}

export default Control
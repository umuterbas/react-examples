import React, {useState} from 'react'

export default function LightButton(props) {
    const {light, setLight, lightText} = props;
    
    const handleLight = () => {
        // console.log('light', light)
        // console.log('!light', (!light))
        setLight(!light)
    }
  return (
    <div>
      <button className={lightText} onClick={handleLight}><h3>Light is turned {lightText}</h3></button>
    </div>
  )
}

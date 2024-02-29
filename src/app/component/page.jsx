import React from 'react'


const handleEvent=() => {
    alert('Handle Client Side')
}

function Button() {
  return (
  <button onClick={handleEvent}></button>
  )
}

export default Button
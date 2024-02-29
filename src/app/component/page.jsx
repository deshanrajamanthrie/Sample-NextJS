'use client'
import React from 'react'


const handleEvent=() => {
    alert('Handle Client Side')
}

function Button() {
  return (
  <button onClick={handleEvent}>Click Here</button>
  )
}

export default Button
'use client'
import React from 'react'



function page() {

    const handleAlert=()=>{
        alert('alert');
    }


  return (
    <>
    <h1>Catch All Path</h1>
    <button onClick={handleAlert}>Click Here</button>
    </>
  )
}

export default page
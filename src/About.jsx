import React, { useState } from 'react'
import Home from './Home'

const About = () => {

  let[count,setCount]=useState(0)

  let increment=()=>{
    setCount(count+1)
  }

  let decrement=()=>{
    setCount(count-1)
  }
  return (
    <div>
      
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <Home x={count} ></Home>
    </div>
  )

}

export default About
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  // function handClick() {
  //   alert("I am click")
    
  // }

  // function hover (){
  //   alert("tuch")
  // }

  function changeInput(params) {
    console.log("change input")
    
  }

  return (
    <>
    <div>

    <form>
      <input type='text' onChange={changeInput}/>
    </form>

    {/* <p onMouseOver={hover} style={{border:"1px solid black"}}> 
      Hi Chitranjan
    </p>
      
       <button onClick={() => {alert("i am click")}}>click me</button> */}
      </div>
    </>
  )
}

export default App

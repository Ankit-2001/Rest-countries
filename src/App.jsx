import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Hero from './Hero'

function App() {

  const [mode,setMode] = useState(false);

  function changeMode(){
    setMode(prevMode => !prevMode);
  }
  
  const styles = {
    backgroundColor: mode ? "hsl(207, 26%, 17%)" : "#FFFFFF",
    color: mode ? "#FFFFFF" : "#000000",
  };
  
  return (
    <div style ={styles} className='parent-container'>
     <Nav mode = {mode} handleClick = {changeMode} />
     <Hero mode = {mode} />
    </div >
  )
}

export default App

import React, { useState } from 'react'
import './App.css'

function App() {
  const [min, setMin] = useState()
  const [max, setMax] = useState()
  const [random, setRandom] = useState()

  const changeMax = (e) => {
    setMax(Number(e.target.value))
  }

  const changeMin = (e) => {
    setMin(Number(e.target.value))
  }

  const generateRandom = () => {
    setRandom(Math.floor(Math.random() * (max - min + 1) + min))
  }
  const onClearMin = () => {
    setMin("");
  };
  const onClearMax = () => {
    setMax("");
  };

  return (
    <div className="App">
      {/* 🍀 This Component App.jsx */}
      {/* <h1>Selam</h1> */}
      <div className="container">
        <p>Random Number : {random}</p>
        <input type="number" placeholder='Enter a min number' onChange={changeMin} onClick={onClearMin} value={min} />
        <input type="number" placeholder='Enter a max number' onChange={changeMax} onClick={onClearMax} value={max} />
        <button onClick={generateRandom}>Give a random number</button>
      </div>
    </div>
  )
}

export default App

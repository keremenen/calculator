import { useState, useEffect } from 'react'
import './App.css'


function App() {

  const [calc, setCalc] = useState('')
  const [restult, setResult] = useState('')

  const controls = ['/', '*', '-', '+', '-']



  const handleClick = value => {
    if (
      (controls.includes(value) && calc === '') ||
      (controls.includes(value) && controls.includes(calc.slice(-1)))
    ) return

    setCalc(calc + value)

    if (!controls.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  return (
    <div className='App'>
      <div className='wrapper'>
        <div className='display'>
          <span>({restult})</span>{calc}
        </div>
        <div className='controls'>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button>DEL</button>
        </div>
        <div className='digits'>
          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(3)}>3</button>
          <button onClick={() => handleClick(4)}>4</button>
          <button onClick={() => handleClick(5)}>5</button>
          <button onClick={() => handleClick(6)}>6</button>
          <button onClick={() => handleClick(7)}>7</button>
          <button onClick={() => handleClick(8)}>8</button>
          <button onClick={() => handleClick(9)}>9</button>
          <button onClick={() => handleClick(0)}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  )
}

export default App

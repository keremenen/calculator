import './App.css'

function App() {

  return (
    <div className='App'>
      <div className='wrapper'>
        <div className='display'>
          <span>(0)</span>0
        </div>
        <div className='controls'>
          <button>/</button>
          <button>*</button>
          <button>-</button>
          <button>+</button>
          <button>DEL</button>
        </div>
        <div className='digits'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  )
}

export default App

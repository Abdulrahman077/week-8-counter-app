import { useState } from 'react'
import './App.css'
function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <div className="counter-container">
        <h1>Counter Application</h1>

        <h2 className="counter-value">{count}</h2>
        <div className="button-group">
          <button className="increment" onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button className="decrement" onClick={() => { if (count > 0) setCount(count - 1); }}>
            Decrement
          </button>
          <button className="reset" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
        {count === 0 && <h3 className="minimum-message">Minimum limit reached</h3>}
      </div>
    </>
  )
}

export default App
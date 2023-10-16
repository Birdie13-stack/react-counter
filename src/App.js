import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <div className="counter">
        <h1>Counter</h1>

        <div class="count-container">
          <button id="decrease" onClick={decrementCount}>
            -
          </button>
          <div class="count-card">
            <h2 id="count-value">{count}</h2>
          </div>
          <button id="increase" onClick={incrementCount}>
            +
          </button>
        </div>

        <button id="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

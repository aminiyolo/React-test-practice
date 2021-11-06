import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [disable, setDisable] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <div>
          <button
            data-testid="minus-button"
            onClick={() => setCounter((counter) => counter - 1)}
            disabled={disable}
          >
            -
          </button>
          <button
            data-testid="plus-button"
            onClick={() => setCounter((counter) => counter + 1)}
            disabled={disable}
          >
            +
          </button>
          <button
            data-testid="on/off-button"
            onClick={() => setDisable((prev) => !prev)}
            style={{ backgroundColor: "blue" }}
          >
            Blue color
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

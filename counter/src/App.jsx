import React, { useState } from "react";

import "./style.css";
function App() {
  const [count, setCount] = useState(0);

  const counter = 1;
  const increment = () => {
    setCount((prevCount) => {
      return prevCount + counter;
    });
  };

  const decrement = () => {
    setCount((prevCount) => {
      return prevCount - counter;
    });
  };

  return (
    <div className="app">
      <h1 className="title">Counter</h1>
      <span className="counter">{count}</span>
      <div className="buttons">
        <button className="increment-btn" onClick={increment}>
          Increment
        </button>
        <button className="decrement-btn" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;

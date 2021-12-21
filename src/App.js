import React, { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container">
      <div className="box-container">
        <div className="state">
          <div className="state-values"> {counter}</div>
          <div className="state-btns">
            <Controller
              handleIncrement={() => setCounter(counter + 1)}
              handleDecrement={() => setCounter(counter - 1)}
            />
          </div>
        </div>
        <div className="text-section">
          <h1>this is sample text</h1>
          <p>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content. Lorem ipsum may be used as a placeholder before
            the final copy is available
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

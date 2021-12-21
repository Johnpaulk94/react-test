import React from "react";

function Controller({ handleIncrement, handleDecrement }) {
  return (
    <>
      <button className="btn btn-left" onClick={handleIncrement}>
        +
      </button>
      <button className="btn" onClick={handleDecrement}>
        -
      </button>
    </>
  );
}

export default Controller;

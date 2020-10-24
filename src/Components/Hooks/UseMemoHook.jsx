import React, { useState } from "react";

const UseMemoHook = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => setCounterOne(counterOne + 1);
  const incrementTwo = () => setCounterTwo(counterTwo + 1);

  const isEven = () => {
    return counterOne % 2 == 0;
  };

  return (
    <div>
      <h2>Use memo hook</h2>
      <div>
        <button className="one" onClick={incrementOne}>
          counter one {counterOne}
        </button>
        <span>{isEven() ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button className="one" onClick={incrementTwo}>
          counter one {counterTwo}
        </button>
      </div>
    </div>
  );
};

export default UseMemoHook;

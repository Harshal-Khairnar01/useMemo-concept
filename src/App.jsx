import React, { useMemo, useState } from "react";
import "./App.css";
import useCustomMemoHook from "./hooks/use-custom-hook";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);
  const squaredValue = () => {
    console.log("heavy calculation");
    return counter * counter;
  };
  // const memoizedSquareValue = useMemo(squaredValue, [counter]);

  // using custom memo
  const memoizedSquareValue = useCustomMemoHook(squaredValue, [counter]);
  return (
    <div>
      <h1> counter: {counter}</h1>
      <h2> Squared value : {memoizedSquareValue} </h2>
      <button onClick={() => setCounter(counter + 1)}>incement</button>

      <h1>Counter 2: {counter2}</h1>
      <button onClick={() => setCounter2(counter2 - 1)}>Decement</button>
    </div>
  );
}

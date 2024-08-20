import React from "react";
import { useState } from "react";
import Child from "./components/Child";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>부모</h1>
      <span>{count}</span>
      <Child count={count} setCount={setCount}></Child>
    </div>
  );
};

export default App;

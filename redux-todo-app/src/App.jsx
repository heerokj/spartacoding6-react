import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  const todos = useSelector((state) => state);
  console.log("todos", todos);
  return (
    <div>
      <h1>Redux TODO App</h1>
    </div>
  );
};

export default App;

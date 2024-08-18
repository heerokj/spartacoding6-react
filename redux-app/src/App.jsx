import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  const counterReducer = useSelector((state) => state.counter);
  console.log("counterReducer", counterReducer);
  return <div>App</div>;
};

export default App;

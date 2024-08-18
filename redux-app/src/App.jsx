import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, removerNumber } from "./redux/modules/counter";

const App = () => {
  const counterReducer = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [newNumber, setNewNumber] = useState(0);

  return (
    <div>
      {counterReducer.number} <br />
      <input
        type="text"
        onChange={(e) => {
          return setNewNumber(+e.target.value); //*** e.target.value앞에 + 붙여주면 Number로 형변환됨
        }}
        value={newNumber}
      />
      <button
        onClick={() => {
          dispatch(addNumber(newNumber));
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(removerNumber(newNumber));
        }}
      >
        -1
      </button>
    </div>
  );
};

export default App;

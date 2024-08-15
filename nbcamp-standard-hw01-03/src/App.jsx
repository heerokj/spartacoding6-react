import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import Status from "./components/Status";

function App() {
  const [count, setCount] = useState(0);

  const title = "Counter App";
  const year = "2024";

  return (
    <div>
      <Header title={title}></Header>
      <Counter count={count} setCount={setCount}></Counter>
      <Status count={count}></Status>
      <Footer year={year}></Footer>
    </div>
  );
}

export default App;

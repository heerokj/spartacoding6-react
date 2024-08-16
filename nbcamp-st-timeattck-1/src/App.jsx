import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Content from "./components/Content";

const App = () => {
  const [countries, setCountries] = useState([]);

  return (
    <div>
      <Header></Header>
      <Content countries={countries} setCountries={setCountries}></Content>
      <List countries={countries} setCountries={setCountries}></List>
    </div>
  );
};

export default App;

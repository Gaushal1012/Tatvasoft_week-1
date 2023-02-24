import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "../src/pages/Counter";

function App() {
  const [ack, setack] = useState(true);

  const change = () => {
    setack(!ack);
  };

  return (
    <>
      <Counter />

      {ack ? <Home /> : <About />}

      <button onClick={change}>change</button>
    </>
  );
}

export default App;

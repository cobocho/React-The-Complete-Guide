import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {isClicked && <p>This is new!</p>}
      <Button type="click" onClick={clickHandler}>
        Click!
      </Button>
    </div>
  );
}

export default App;

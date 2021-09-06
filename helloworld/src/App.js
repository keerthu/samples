import React from "react";
import './App.css';
import Button from "./Button";

const App = () => {
  return(
    // <h1 style={{textAlign: 'center'}}>Hello World</h1>
    <div>
      <h1 className="h1">Hello World</h1>
      <h2>Hello</h2>
      <Button title="App Store"/>
      <Button title="Play Store"/>
      <Button/>
      
    </div>
  );
}

export default App;
import React from "react";
import StateHooks from "./stateHooks";
import EffectHooks from "./effectHooks";
import Rules from "./rules";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <StateHooks />
      <EffectHooks />
      <Rules />
    </div>
  );
};

export default App;

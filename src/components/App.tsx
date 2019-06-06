import React from "react";
import StateHooks from "./stateHooks/index";
import EffectHooks from "./effectHooks/index";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <StateHooks />
      <EffectHooks />
    </div>
  );
};

export default App;

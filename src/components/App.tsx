import React from "react";
import StateHooks from "./stateHooks";
import EffectHooks from "./effectHooks";
import Rules from "./rules";
import CustomHooks from "./customHooks";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <StateHooks />
      <EffectHooks />
      <Rules />
      <CustomHooks />
    </div>
  );
};

export default App;

import React from "react";
import StateHooks from "./stateHooks";
import EffectHooks from "./effectHooks";
import Rules from "./rules";
import CustomHooks from "./customHooks";
import TextProvider from "./contextHooks/TextProvider";
import UseContext from "./contextHooks/UseContext";

const App: React.FC = () => {
  return (
    <TextProvider>
      <div className="App">
        <h1>React Hooks</h1>
        <StateHooks />
        <EffectHooks />
        <Rules />
        <CustomHooks />
        <UseContext />
      </div>
    </TextProvider>
  );
};

export default App;

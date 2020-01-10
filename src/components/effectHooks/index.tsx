import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import OnlineStatus from "./OnlineStatus";

const EffectHooks = () => {
  const [value, setValue] = useState(0);
  // This gets called after every render, by default
  useEffect(() => {
    console.log("render!");
    // If you want to implement componentWillUnmount, return a function from here,
    // If your effect returns a function, React will run it when it is time to clean up.
    return () => console.log("unmounting..");
  });

  // If one of the dependencies has changed since the last time, the effect will run again.
  // It will also still run after the initial render.
  useEffect(() => {
    alert("Initial render or The value has been changed.");
  }, [value]);

  return (
    <div>
      <h2>Effect Hooks</h2>
      <h3>UseEffect Example(1)</h3>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setValue(value + 1)}
      >
        Change Value
      </Button>
      <h3>UseEffect Example(2)</h3>
      <OnlineStatus />
    </div>
  );
};

export default EffectHooks;

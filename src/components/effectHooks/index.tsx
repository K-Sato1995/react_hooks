import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

const EffectHooks = () => {
  const [value, setValue] = useState(0);
  // This gets called after every render, by default
  useEffect(() => {
    console.log("render!");
    // If you want to implement componentWillUnmount, return a function from here,
    return () => console.log("unmounting..");
  });

  // If one of the dependencies has changed since the last time, the effect will run again.
  // It will also still run after the initial render.
  useEffect(
    () => {
      console.log("The value has been changed.");
    },
    [value]
  );

  return (
    <div>
      <h2>Effect Hooks</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setValue(value + 1)}
      >
        Change Value
      </Button>
    </div>
  );
};

export default EffectHooks;

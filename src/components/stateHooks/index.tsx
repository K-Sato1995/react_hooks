import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const StateHooks = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>State Hooks</h2>
      <h3>The number is {count}</h3>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
      >
        Test
      </Button>
    </div>
  );
};

export default StateHooks;

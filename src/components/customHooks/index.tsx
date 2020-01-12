import React, { useState, useEffect } from "react";

const CustomHooks = () => {
  const useMessage = (message: string) => {
    useEffect(() => {
      alert(message);
    }, []);
  };
  useMessage("Hello from my custom hook");

  return (
    <div>
      <h2>Custom hooks</h2>
      <h3>What is a custom hooks</h3>
      <p>
        A custom Hook is a JavaScript function whose name starts with ”use” and
        that may call other Hooks
      </p>
      <p>
        Unlike a React component, a custom Hook doesn’t need to have a specific
        signature. We can decide what it takes as arguments, and what, if
        anything, it should return. In other words, it’s just like a normal
        function. Its name should always start with use so that you can tell at
        a glance that the rules of Hooks apply to it.
      </p>
    </div>
  );
};

export default CustomHooks;

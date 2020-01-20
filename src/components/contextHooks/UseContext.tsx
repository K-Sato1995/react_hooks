import React, { useContext } from "react";
import { TextContext } from "./TextProvider";

const UseContext: React.FC = () => {
  const value = useContext(TextContext);
  return (
    <div>
      <h2>Context Hooks</h2>
      <h3>{value.text}</h3>
    </div>
  );
};

export default UseContext;

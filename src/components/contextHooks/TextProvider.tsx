import React, { createContext } from "react";

export const TextContext = createContext<{
  text?: string;
}>({});

const TextProvider: React.FC = children => {
  return (
    <TextContext.Provider
      value={{ text: "Hello From Context" }}
      {...children}
    />
  );
};

export default TextProvider;

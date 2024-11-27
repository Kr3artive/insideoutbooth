import React, { createContext, useState } from "react";

export const SmallScreenContext = createContext();

const SmallScreenProvider = ({children}) => {
  const [smallscreen, setSmallscreen] = useState(false);
  const handleSmall = () => {
    setSmallscreen((prevsmallscreen)=> !prevsmallscreen);
  };
  return (
    <SmallScreenContext.Provider
      value={{ smallscreen, setSmallscreen, handleSmall }}
    >
      {children}
    </SmallScreenContext.Provider>
  );
};

export default SmallScreenProvider;

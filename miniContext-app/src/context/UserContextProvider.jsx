import React, { useState } from "react";
import UserContext from "./userContext";
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}> {/* context provide the value .privider property && context provide value will be pass for value under object create and pass any type value*/}
    
      {children} {/* Children is name of props for provided props as it is display means render*/}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

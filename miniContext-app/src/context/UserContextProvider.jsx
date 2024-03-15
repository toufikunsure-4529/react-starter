import React, { useState } from "react";
import { UserContext } from "./UserContext";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}{" "}
      {/* children actually props as it is render <Card /> <Home /> like this */}
    </UserContext.Provider>
  );
};

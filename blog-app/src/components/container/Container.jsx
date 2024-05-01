import React from "react";

//container is a components for define style property height/width
function Container({ children }) {
  return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
}

export default Container;

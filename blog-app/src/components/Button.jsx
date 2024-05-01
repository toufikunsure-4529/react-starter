import React from "react";


//resued button components
function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <Button
      className={`px-4 py-2 rounded-md ${bgColor} ${textColor} ${className}`}
      {...props} //..props is a additional attribute if user pass spreade it
    >
      {children}
    </Button>
  );
}

export default Button;

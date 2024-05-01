import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-700">
        BLOG <span className="text-red-600">APP</span>
      </h2>
    </div>
  );
}

export default Logo;

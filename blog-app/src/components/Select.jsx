import React, { forwardRef, useId } from "react";

function Select({ options = [], label, className = "", ...props }, ref) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label hrmlFor={id} className="">
          {label}
        </label>
      )}
      <select
        id={id}
        {...props}
        className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
      >
        {/* options?. this synatx is a check options array under any value pass to map loop running other wise not running optionally loop*/}
        {options?.map((option) => {
          <option value={option} key={option}>
            {option}
          </option>;
        })}
      </select>
    </div>
  );
}

export default forwardRef(Select); //this is synatx also forward ref when export components to wrap function name

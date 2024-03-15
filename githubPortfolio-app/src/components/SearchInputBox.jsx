import React from "react";

function SearchInputBox({ inputValue, onChangeInputValue, handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex items-center"
    >
      <input
        type="text"
        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset sm:text-sm sm:leading-6"
        placeholder="Search Github Profile"
        value={inputValue}
            onChange={(e) => onChangeInputValue(e.target.value)}

      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchInputBox;

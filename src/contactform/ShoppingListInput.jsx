import React from "react";

const ShoppingListInput = ({ input, setInput }) => {
  console.log(`input`, input);
  return (
    <div className="p-8">
      <input
        className="w-44 px-2 py-1 rounded-lg shadow-md"
        value={input}
        type="text"
        placeholder="Search item here"
        onChange={(e) => setInput(e.target.value)}
      ></input>
    </div>
  );
};
export default ShoppingListInput;

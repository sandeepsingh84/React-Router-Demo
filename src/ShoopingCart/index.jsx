import React, { useState } from "react";

const ShoopingCart = () => {
  const [cartArray, setCartArray] = useState([]);
  const [input, setInput] = useState("");

  console.log(`cartArray`, cartArray);

  return (
    <>
      <input
        className="w-44 px-2 py-1 rounded-lg shadow-md"
        value={input}
        type="text"
        placeholder="Search item here"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <div
        className="cursor-pointer"
        onClick={() =>
          setCartArray([
            ...cartArray,
            {
              name: input,
              quantity: 1,
            },
          ])
        }
      >
        Add goods to Cart
      </div>
      {cartArray?.length > 0 &&
        cartArray?.map((item) => <div key={item?.name}>{item?.name}</div>)}
    </>
  );
};

export default ShoopingCart;

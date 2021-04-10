import React, { useState } from "react";
import ShoppingListInput from "./ShoppingListInput";
import ShoppingListArray from "./ShoppingListArray";

const ShoppingListParent = () => {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
  const [increment, setIncrement] = useState();
  const [quant, setQuant] = useState(1);
  const [incFilter, setIncFilter] = useState();
  console.log(`incrment`, increment);

  console.log(`quant`, quant);
  console.log(`incfilter`, incFilter);
  // const obj = {
  //   name: "ram",
  //   age: 10,
  //   address: "amritsar",
  // };

  // const obj = { input, Quantity: 1 };
  console.log(`array`, array);
  return (
    <div className="p-10">
      {/* <div className="cursor-pointer" onClick={() => setArray([...array, obj])}>
        new
      </div> */}
      <div className="bg-purple-600 rounded-lg shadow-md flex justify-between">
        <h1 className="p-5 font-bold text-4xl text-white">Shopping List</h1>
        <div className="flex">
          <ShoppingListInput input={input} setInput={setInput} />
          <div
            className="flex m-7 pt-1 bg-purple-400 px-2 rounded-lg shadow-md border"
            onClick={() => {
              console.log(`input`, input);
              setArray([
                ...array,
                {
                  name: input,
                  quantity: quant,
                  // it gives any random number as unique from 2 to 100,, and floor function gives fraction number to higher round off number,, and ceil() function lower round off.
                  id: Math.floor(Math.random() * (100 - 2) + 2),
                },
              ]);
              setInput("");
            }}
          >
            <p className=" text-yellow-300 font-bold text-xl">Add to Cart</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-right-short text-yellow-300 "
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            className="bi bi-shop m-5 text-gray-100 mt-7"
            viewBox="0 0 16 16"
          >
            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
          </svg>
        </div>
      </div>
      <div className="">
        {/* <div
          className="cursor-pointer"
          onClick={() => setArray([...array, obj])}
        >
          new
        </div> */}
        {/* <div
          className=""
          onClick={() => setArray([].concat(newValues, ...array))}
        >
          value
        </div> */}
        <ShoppingListArray
          array={array}
          setArray={setArray}
          input={input}
          increment={increment}
          setIncrement={setIncrement}
          quant={quant}
          setQuant={setQuant}
          incFilter={incFilter}
          setIncFilter={setIncFilter}
        />
      </div>
    </div>
  );
};
export default ShoppingListParent;

import React, { useState } from "react";

const Inputfields = () => {
  const [sum, setsum] = useState(0);
  const [Number1, setNumber1] = useState(0);
  const [Number2, setNumber2] = useState(0);

  const arrowFunction = () => {
    return 10;
  };
  function normamlFunction() {
    return 10;
  }
  console.log(arrowFunction(), normamlFunction(), "CCXCXCXCC");
  return (
    <div className="p-20 w-full">
      <div className=" border rounded shadow bg-gray-50 bg-transparent">
        <div className=" flex text-gray-600">
          <input
            type="number"
            value={Number1}
            onChange={(e) => {
              setNumber1(Number(e.target.value));
            }}
            className="border p-5 m-10 w-full rounded text-3xl text-black-400 placeholder-black bg-gray-100 shadow"
            placeholder="0"
          />
          <input
            type="number"
            value={Number2}
            onChange={(ee) => {
              setNumber2(Number(ee.target.value));
            }}
            className="border p-5 m-10 w-full rounded bg-gray-100 shadow text-3xl placeholder-black "
            placeholder="0"
          />
        </div>
        <div className="text-3xl border bg-gray-100 p-5  mx-10 rounded shadow  ">
          {sum}
        </div>
        <div className="p-10 flex justify-between font-bold">
          <button
            className="border bg-gray-100 p-4 rounded shadow font-bold"
            onClick={() => {
              setsum(Number1 + Number2);
            }}
          >
            SUM
          </button>
          <button
            className="border bg-gray-100 p-4 rounded shadow font-bold"
            onClick={() => {
              setsum(Number1 - Number2);
            }}
          >
            MINUS
          </button>
          <button
            className="border bg-gray-100 p-4 rounded shadow font-bold"
            onClick={() => {
              setsum(Number1 / Number2);
            }}
          >
            DIVIDE
          </button>
          <button
            className="border bg-gray-100 p-4 rounded shadow font-bold"
            onClick={() => {
              setsum(Number1 * Number2);
            }}
          >
            MULTIPLY
          </button>
          <button
            className="border bg-gray-100 p-4 rounded shadow font-bold"
            onClick={() => {
              setsum((Number1 / Number2) * 100);
            }}
          >
            PERCENTAGE
          </button>
          <button
            className="border bg-gray-100 p-4 rounded shadow font-bold"
            onClick={() => {
              setNumber1(0);
              setNumber2(0);
              if (sum > 0) {
                setsum(0);
              } else {
                setsum(0);
              }
            }}
          >
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
};
export default Inputfields;

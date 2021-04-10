import React, { useEffect, useState } from "react";

const Buttonstate = () => {
  const [plus, setplus] = useState(0);

  return (
    <div className="flex text-center justify-center p-26  ">
      <div className="font-bold text-gray-500  ">
        <div classname="">QUANTITY</div>
        <div className="flex text-center px-4   justify-between border border-gray-300 rounded">
          <div className=" py-2">
            <button
              className="focus:outline-none px-4 text-2xl font-bold "
              onClick={() => {
                if (plus === 0) {
                  setplus(0);
                } else {
                  setplus(plus - 1);
                }
              }}
            >
              -
            </button>
          </div>
          <div className="text-2xl py-2 font-bold px-10 border-r border-l border-gray-300">
            {" "}
            {plus}
          </div>
          <div className=" py-2">
            <button
              className="px-4 focus:outline-none text-2xl font-bold"
              onClick={() => {
                if (plus === 10) {
                  setplus(10);
                } else {
                  setplus(plus + 1);
                }
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div classname="">
      <input
        type="number"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        className="border"
      />
      </div>
    </div>
    
  );
};
export default Buttonstate;

import React from "react";

const ChildLeft = ({
  inputChildLeft,
  setInputChildLeft,
  inputChildRight,
  setInputChildRight,
  setInputChildAddress,
  inputChildAddress,
  list,
  setList,
}) => {
  console.log(`inputChildLeft`, inputChildLeft);
  return (
    <div className="m-5">
      <div className="pb-3">
        <p className="font-bold text-xl mb-3 text-indigo-500">First Name</p>
        <input
          className="w-80 p-3 font-bold text-gray-500 placeholder-gray-200 rounded-lg shadow-md focus:outline-none"
          placeholder="Enter first name"
          value={inputChildLeft}
          type="text"
          onChange={(e) => {
            setInputChildLeft(e.target.value);
            console.log(`event`, e);
          }}
        ></input>
      </div>
      {/* <div className="pb-3">
        <p className="">Last Name</p>
        <input
          className=""
          value={inputChildRight}
          type="text"
          onChange={(ee) => {
            setInputChildRight(ee.target.value);
            console.log(`eventlastname`, ee);
          }}
        ></input>
      </div>
      <div className="pb-3">
        <p className="">Address</p>
        <input
          className=""
          value={inputChildAddress}
          type="text"
          onChange={(eee) => {
            setInputChildAddress(eee.target.value);
            console.log(`eventAddress`, eee);
          }}
        ></input>
      </div> */}
      <div className="mt-3">
        <button
          className="px-3 py-1 mt-3 w-28 focus:outline-none bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-400 hover:shadow-lg hover:text-indigo-500 font-bold"
          onClick={() => {
            setList([
              ...list,
              inputChildLeft,
              //   inputChildRight,
              //   inputChildAddress,
            ]);
            setInputChildLeft("");

            // setInputChildRight("");
            // setInputChildAddress("");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default ChildLeft;

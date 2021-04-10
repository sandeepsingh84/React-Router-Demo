import React, { useState } from "react";
import ChildLeft from "./ChildLeft";
import ChildRight from "./ChildRight";

// const ArrayList = [
//   {
//     S,
//   },
// ];
const ContactFormParent = () => {
  const [inputChildLeft, setInputChildLeft] = useState();
  //   const [inputChildRight, setInputChildRight] = useState();
  //   const [inputChildAddress, setInputChildAddress] = useState();
  const [list, setList] = useState([]);
  console.log(`list`, list);

  return (
    <div className="">
      <div className="border bg-gray-300 p-5 rounded-lg shadow-lg m-5 flex justify-between bg-gradient-to-r from-indigo-400">
        <p className="font-extrabold text-4xl text-gray-700">Contact Form</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          className="bi bi-file-earmark-person text-blue-400 "
          viewBox="0 0 16 16"
        >
          <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
        </svg>
      </div>
      <div className="flex justify-center p-5 w-full ">
        <div className="bg-gray-100 border-r divide-indigo-400 w-full rounded-l-lg shadow-md">
          <ChildLeft
            inputChildLeft={inputChildLeft}
            setInputChildLeft={setInputChildLeft}
            // inputChildRight={inputChildRight}
            // setInputChildRight={setInputChildRight}
            // inputChildAddress={inputChildAddress}
            // setInputChildAddress={setInputChildAddress}
            list={list}
            setList={setList}
          />
        </div>
        <div className="bg-gray-100 w-full rounded-r-lg shadow-md">
          <ChildRight list={list} setList={setList} />
        </div>
      </div>
    </div>
  );
};
export default ContactFormParent;

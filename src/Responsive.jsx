import React, { useState } from "react";

const Responsive = () => {
  return (
    <div className=" bg-white  border border-gray-300  h-full">
      <div className="border border-gray-300 rounded-b-lg m-10 ml-8 rounded-lg">
        <div className="flex rounded-b-lg">
          <div className=" h-12 text-lg font-semibold font-sans text-gray-500 subpixel-antialiased ml-6 mt-4">
            <p classname="font-sans">Split with image </p>{" "}
          </div>
          <div className="bg-gray-100 w-36 rounded-full py-3 px-6 ml-2 mt-5 h-6 font-bold text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14"
              fill="currentColor"
              class="bi bi-lock-fill -mx-4 -my-2 text-gray-500"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            </svg>
            <p className="ml-6 -m-3.5 font-sans text-gray-500">PNG PREVIEW</p>
          </div>

          <p className="text-right ml-96 pl-96 h-12 text-lg mt-4 font-bold font-sans text-green-600 ">
            {" "}
            Get the HTML{" "}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-arrow-right-short font-bold text-right text-green-600 text-lg ml-1 pt-1  mt-4"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </div>
        <div className=" bg-white  flex items-center rounded-b-lg border border-gray-300">
          <div className="">
            <img
              src="https://images8.alphacoders.com/408/408951.jpg"
              className="rounded-bl-lg"
              alt="fjgofg"
            />
          </div>
          <div className=" text-left ">
            
            <p className="capitalize font-extrabold font-sans text-left ml-8 text-4xl">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45" 
                fill="currentColor"
                class="bi bi-people bg-blue-500 text-white rounded-md mb-5 mt-8 "
                viewBox="-5 -4 25 25"
              >
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
              </svg>
              deliver what you customers want every time
            </p>
            <p className="font-semibold font-sans text-gray-500 text-left m-8 mt-4">
              A paragraph is a series of related sentences developing a central
              idea, called the topic. Try to think about paragraphs in terms of
              thematic unity: a paragraph is a sentence or a group of sentences
              that supports one central, unified idea. Paragraphs add one idea
              at a time to your broader argument.
            </p>
            <div className="mt-4 ml-8 mb-7 font-sans ">
              <table className=" table-fixed bg-white rounded-t-lg  rounded-b-lg border-collapse  border-gray-300 w-80   ">
                <tr className="">
                  <td className=" ">
                    <p className="font-extrabold text-indigo-600  bg-white text-3xl">
                      {" "}
                      24/7{" "}
                    </p>
                    <p className="text-gray-500 font-bold">Delivery</p>
                  </td>
                  <td className="">
                    <p className="font-extrabold text-indigo-600 bg-white  text-3xl">
                      99.9%
                    </p>
                    <p className="text-gray-500 font-bold"> Pepperoni</p>
                  </td>
                  <td className="  ">
                    <p className="font-extrabold text-indigo-600 bg-white text-3xl">
                      {" "}
                      100k+{" "}
                    </p>
                    <p className="text-gray-500 font-bold"> Calories</p>
                  </td>
                </tr>
              </table>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsive;

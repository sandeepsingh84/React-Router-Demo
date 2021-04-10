import React, { useState } from "react";
import axios from "axios";

const TitleApi = () => {
  const [title, setTitle] = useState([]);
  const [showTitle, setShowTitle] = useState(false);
  console.log(`title`, title);
  const getTitle = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums`)
      .then((response) => {
        if (response) {
          setShowTitle(false);
          setTitle(response?.data);
        } else {
          setTitle(<div> Error data is not available</div>);
        }
      });
  };
  return (
    <div className="m-5">
      <div className="text-center bg-gray-100 p-5  my-10 py-10 rounded-lg shadow-md">
        <h className=" text-center font-bold text-4xl">User Titles</h>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-gray-400 rounded-lg shadow focus:outline-none p-3 font-semibold text-xl text-white hover:shadow-lg hover:bg-blue-600 hover:text-black mr-5"
          onClick={() => {
            getTitle();
            setShowTitle(true);
          }}
        >
          Get Titles
        </button>
        <button
          className="bg-gray-400 rounded-lg shadow focus:outline-none p-3 font-semibold text-xl text-white hover:shadow-lg hover:bg-blue-600 hover:text-black w-24"
          onClick={() => setTitle([])}
        >
          Clear
        </button>
      </div>
      <div className=" grid grid-flow-col  grid-rows-6 gap-4 text-center mt-5  p-10 border rounded-lg shadow-md  h-full">
        {title.length > 0 ? (
          title
            ?.filter((filtuser) => filtuser.userId < 4)
            .map((item) => (
              <div
                className="border p-3 rounded-lg shadow-md  hover:bg-blue-100 hover:shadow-lg "
                key={item?.id}
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    className="bi bi-award ml-36  mb-5 text-blue-800"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                  </svg>
                  <p className="font-semibold">{item?.title}</p>
                </div>
              </div>
            ))
        ) : (
          <div className="text-center mt-5 p-20  rounded-lg shadow-md h-96 bg-gray-50">
            <p className="font-bold text-4xl mt-20 text-blue-700 text-center">
              {showTitle ? " loading..." : "User title list is empty !"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TitleApi;

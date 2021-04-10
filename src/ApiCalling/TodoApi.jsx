import React, { useState, useEffect } from "react";
import axios from "axios";
// import './styles.css'
const TodoApi = () => {
  const [title, setTitle] = useState([]);
  const [showTitle, setShowTitle] = useState(false);
  const [userNo, setUserNo] = useState(0);
  const [details, setDetails] = useState();
  const [userPending, setUserPending] = useState(false);
  const [submit, setSubmit] = useState();
  // const [status, setStatus] = useState();
  console.log(`details`, details);
  console.log(`title`, title);
  const getTodo = () => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((response) => {
      if (response) {
        setShowTitle(false);
        setTitle(response?.data);
      } else {
        setTitle(response?.Error);
      }
    });
  };
  const userDeatils = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${userNo}`)
      .then((response) => {
        if (response) {
          setUserPending(false);
          setDetails(response?.data);
        } else {
          setDetails(response?.Error);
        }
      });
  };

  useEffect(() => {
    userDeatils();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userNo]);
  return (
    <div className="m-5">
      <div className="text-center bg-pink-200 p-5  my-10 py-10 rounded-lg shadow-md">
        <h className=" text-center font-bold text-4xl text-gray-500">
          Users Todo list
        </h>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-gray-400 rounded-lg shadow focus:outline-none p-3 font-semibold text-xl text-white hover:shadow-lg hover:bg-pink-200 hover:text-black mr-5"
          onClick={() => {
            getTodo();
            setShowTitle(true);
          }}
        >
          Get todo list
        </button>
        <button
          className="bg-gray-400 rounded-lg shadow focus:outline-none p-3 font-semibold text-xl text-white hover:shadow-lg hover:bg-pink-200 hover:text-black w-24"
          onClick={() => setTitle([])}
        >
          Clear
        </button>
      </div>
      <div className="flex justify-between">
        <div className="  text-center mt-5  p-10 border rounded-lg shadow-md  h-96 overflow-y-auto w-full mr-10">
          {title.length > 0 ? (
            title
              ?.filter((filtuser) => filtuser.userId < 2)
              .map((item) => (
                <div
                  className="border p-3 rounded-lg shadow-md  hover:bg-pink-100 hover:shadow-lg mb-3 py-5"
                  key={item?.id}
                >
                  <div className="flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      className="bi bi-award  text-blue-800"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                      <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                    </svg>
                    <p className="font-semibold ml-5">{item?.title}</p>
                    <p className="">{item?.completed}</p>
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center mt-5 p-20  rounded-lg shadow-md h-96 bg-gray-50">
              <p className="font-bold text-4xl mt-20 text-blue-200 text-center">
                {showTitle ? " loading..." : "Todo list is empty !"}
              </p>
            </div>
          )}
        </div>
        <div className="  w-full text-center  mt-5">
          {title?.length > 0 ? (
            <div className="flex">
              <div className="mr-10">
                <div className="mb-20">
                  <input
                    className="focus:outline-none p-3 border rounded-lg shadow "
                    placeholder=" enter user id"
                    type="number"
                    value={submit}
                    onChange={(e) => setSubmit(Number(e.target.value))}
                  ></input>
                  <button
                    className="focus:outline-none p-2 border rounded-lg shadow ml-3 font-semibold bg-gray-100 mt-5"
                    onClick={() => {
                      setUserNo(submit);
                      setUserPending(true);
                      setSubmit(0);
                    }}
                  >
                    Submit
                  </button>
                </div>
                {/* <button
                className="focus:outline-none p-2 rounded-lg shadow bg-gray-100 font-semibold text-xl mr-5 "
                onClick={() => {
                  userDeatils();
                }}
              >
                Get details
              </button> */}
                <button
                  className="focus:outline-none p-2 rounded-lg shadow bg-gray-100 font-semibold text-xl "
                  onClick={() => {
                    setUserNo(userNo + 1);
                    setUserPending(true);
                  }}
                >
                  Next User
                </button>
              </div>
              <div className="border h-96  w-full rounded-lg shadow-md bg-gray-50">
                <div
                  className="text-center py-20 font-semibold"
                  key={details?.id}
                >
                  <p className="">{details?.title}</p>
                  <p className="">
                    {details?.completed ? "Completed" : "Pending"}
                  </p>
                  <p className="text-gray-400">
                    {userPending ? "Loading.." : ""}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p className=""></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApi;

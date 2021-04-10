import React, { useState, useEffect } from "react";

const Todolist = () => {
  const [input, setinput] = useState();
  const [list, setlist] = useState([]);
  const [deleted, setDeleted] = useState(0);
  const [added, setAdded] = useState(0);
  const [displayAlert, setdisplayAlert] = useState(false);

  useEffect(() => {
    if (added > 0) newItemAdded();
  }, [added]);

  useEffect(() => {
    if (deleted > 0) addedItemDeleted();
  }, [deleted]);

  // useEffect(() => {
  //   console.log("focus", focus);
  //   focus();
  // });
  useEffect(() => {
    if (displayAlert) focus();
  }, [displayAlert]);
  const addedItemDeleted = () => {
    alert("item deleted successfuly");
  };
  const newItemAdded = () => {
    alert("item added successfuly");
  };
  const focus = () => {
    alert("ARE YOU SURE THAT YOU WANT TO DELETE");
  };
  return (
    <div className="  border">
      <div className="border-b px-10 py-5 flex justify-between shadow shadow-purple-600">
        <p className="font-bold text-4xl text-purple-800">Todo List</p>
        <div className="flex mr-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            className="bi bi-binoculars mr-10 text-purple-800"
            viewBox="0 0 16 16"
          >
            <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="36"
            fill="currentColor"
            className="bi bi-file-person text-purple-800"
            viewBox="0 0 16 16"
          >
            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </div>
      </div>
      <div className="mx-96 my-16 mb-32">
        <div className="border rounded-lg shadow px-10 py-10 bg-purple-100 w-full">
          <p className="font-semibold text-3xl mb-5 text-purple-800 font-bold">
            Enter Title
          </p>
          <input
            type="text"
            value={input}
            placeholder="Todo title "
            onChange={(e) => {
              console.log(e, "EEEE");
              setinput(e.target.value);
            }}
            className="border border-transparent px-2 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-lg  hover:border-purple-300 w-full max-w-4xl  h-12
            text-xl font-bold text-purple-500
            "
          ></input>
          <button
            className="border border-transparent shadow-md  bg-purple-600 text-white text-2xl font-semibold ml-10 outline-none rounded-lg focus:outline-none  focus:ring-2 focus:ring-purple-600 hover:border-purple-300 w-32 h-12 text-center 
            "
            onClick={() => {
              setlist([...list, input]);
              setinput("");
              // newItemAdded();
              setAdded(added + 1);
            }}
          >
            Add
          </button>
        </div>
        <div className="border mt-16 h-96 rounded-lg shadow overflow-y-auto bg-purple-100 px-7">
          {list.length === 0 ? (
            <div className=" bg-white h-72 mt-12 mx-10 rounded-lg shadow">
              <p className="text-center pt-32 text-gray-400 text-2xl font-bold">
                ENTER TITLE ABOVE FIRST
              </p>
            </div>
          ) : (
            list.map((item) => (
              <div className=" m-2 border p-5 rounded-lg font-bold text-xl flex justify-between bg-white group hover:bg-white hover:shadow-lg hover:border-transparent">
                <p className="mt-2 text-gray-600 text-xl group-hover:text-gray-900">
                  {item}
                </p>
                <button
                  className="border border-transparent shadow-md text-xl font-bold px-2 py-2 bg-red-700 text-white outline-none rounded-lg focus:outline-none hover:border-gray-300 focus:ring-2 focus:ring-red-700 text-center hover:text-gray-200"
                  onClick={() => {
                    setlist(list.filter((delitem) => delitem !== item));
                    setDeleted(deleted + 1);
                    // addedItemDeleted();
                  }}
                  onFocus={() => {
                    setdisplayAlert(true);
                  }}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Todolist;

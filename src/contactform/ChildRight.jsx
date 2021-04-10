import React from "react";

const ChildRight = ({ list, setList }) => {
  return (
    <div className="m-5 overflow-y-auto h-60  rounded-lg">
      {list.length === 0 && (
        <div className="w-full mr-15 bg-white text-center p-10 py-16 px-72 rounded-lg shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-cart-dash mx-32 text-gray-400"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
          <p className="mt-10 font-bold text-2xl text-indigo-300">
            Contact List is Empty !
          </p>
        </div>
      )}
      {list.map((item) => (
        <div className=" flex justify-between bg-white my-2 p-3 rounded-md shadow hover:bg-indigo-200 hover:shadow-lg ">
          <div className=" flex justify-between py-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="bi bi-person-lines-fill text-indigo-600"
              viewBox="0 0 16 16"
            >
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
            </svg>
            <p className="font-semibold text-gray-500 text-xl text-center  hover:text-indigo-700 ml-5">
              {item}
            </p>
          </div>
          <div className="">
            <button
              className="py-1 px-2 bg-red-500 rounded-lg shadow font-bold hover:outline-none focus:outline-none hover:shadow-lg hover:bg-red-700 focus:ring-2 focus:ring-gray-400 hover:ring-gray-200 focus:border-transparent mt-3"
              onClick={() => {
                setList(list.filter((delitem) => delitem !== item));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ChildRight;

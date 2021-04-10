import React from "react";

const TableHookChild2 = ({ cycleRight, setCycleRight }) => {
  return (
    <>
      <div className="flex text-2xl text-bold">
        <div className="" onClick={() => setCycleRight(cycleRight + 5)}>
          <p className="font-extrabold mb-5">Turn Right</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-arrow-90deg-right text-indigo-700 ml-12"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"
            />
          </svg>
          <div className="mt-5 text-xl bg-gray-100 rounded-lg p-2 shadow">{cycleRight} kms Right</div>
        </div>
      </div>
    </>
  );
};
export default TableHookChild2;

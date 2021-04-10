import React from "react";

const TableHookTotal = ({
  runTotal,
  setRunTotal,
  cycleRun,
  setCycleRun,
  cycleSouth,
  setCycleSouth,
  cycleRight,
  setCycleRight,
}) => {
  return (
    <>
      <div className="mt-10 text-center  ">
        <div>
          <button
            className="font-bold text-2xl p-2 focus:outline-none bg-purple-300 shadow-md rounded-lg focus:ring-2 hover:bg-purple-500 hover:shadow-lg"
            onClick={() => setRunTotal(cycleRun + cycleSouth + cycleRight)}
          >
            Total
          </button>
        </div>
        <div className="text-center  ">
          <p className="mt-5 text-xl bg-gray-100 rounded-lg p-2 shadow">
            {runTotal} kms
          </p>
        </div>
      </div>
    </>
  );
};
export default TableHookTotal;

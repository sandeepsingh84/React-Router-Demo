import React from "react";

const runner = ["Ajay"];
const TableHookRunner = ({
  runnerName,
  setRunnerName,
  cycleRun,
  setCycleRun,
  cycleSouth,
  setCycleSouth,
  displayPara,
  setDisplayPara,
  runTotal,
  setRunTotal,
  cycleRight,
  setCycleRight,
}) => {
  return (
    <div className="flex">
      <p className="font-bold text-xl text-indigo-700 mr-10">{runnerName}</p>
      <button
        className="focus:outline-none focus:ring  rounded-lg hover:text-white  bg-purple-300 shadow-md hover:bg-purple-500 hover:shadow-lg p-1"
        onClick={() => {
          setRunnerName(runnerName === "Sandeep" ? "Ajay" : "Sandeep");
          setCycleRun(0);
          setCycleSouth(0);
          setRunTotal(0);
          setCycleRight(0);
          // if (runnerName?.length !== runner.length)
          //   setRunnerName(runnerName === "Sandeep" ? "Ajay" : "Sandeep");
        }}
      >
        <p className="font-bold text-gray-700">Change Rider</p>
      </button>
    </div>
  );
};
export default TableHookRunner;

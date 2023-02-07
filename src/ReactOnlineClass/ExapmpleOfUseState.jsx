import React, {useState} from "react";

const ExapmpleOfUseState = () => {
  const [firstString, setFirstString] = useState("This is my");
  const [secondString, setSecondString] = useState("React class");
  const [combinedString, setCombinedString] = useState();

  console.log(`combinedString`, combinedString);
  const combineLine = () => {
    setCombinedString(firstString + secondString);
  };

  return (
    <div className="flex justify-between p-20 " >
      <h1 className="bg-gray-100 text-blue-500">This is my react class</h1>
      <div>Examples of use state</div>
      <button className="" onClick={combineLine}>
        Combine
      </button>
      <div className="border bg-gray-100 h-24 w-24 flex justify-between">
        <div>{combinedString}</div>
      </div>
      <button onClick={() => setCombinedString("This is my java class")}>
        Change String
      </button>
    </div>
  );
};

export default ExapmpleOfUseState;

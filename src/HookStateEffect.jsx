import React, { useState, useEffect } from "react";
import FeaturePricing from "./Featurepricing";

const HookStateEffect = () => {
  const [count, setCount] = useState(0);
  const [displayPara, setDisplayPara] = useState(false);

  useEffect(() => {
    document.title = `Chat (${count}) `;
    console.log(document.title);
    setDisplayPara(!displayPara);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const getName = (name) => {
    console.log("from parent", name);
  };
  // getName("ram");

  return (
    <>
      {/* self closing tag */}
      {/* unidirectional prop sending ( count and set count) and callback functions (getname) sending property of function getname=(name) to child component bcoz child component can use functionalities of parent component but you have define that function in parent component*/}
      <FeaturePricing
        count={count}
        setCount={setCount}
        getName={getName}
        // name="priya"
        // char="a"
        // number={12}
      />
      <div className="text-center w-full bg-gray-400 h-full w-full p-80">
        {displayPara && (
          <p className="font-semibold text-3xl mb-5 text-purple-800 font-bold">
            Click again
          </p>
        )}

        <h className="font-bold text-4xl text-indigo-700">
          You clicked {count} times
        </h>
        <br />
        <button
          onClick={() => setCount(count + 1)}
          className="font-bold mt-10 p-5 bg-white rounded-lg shadow-md outline-none focus:outline-none focus:ring-2 focus:ring-indigo-600 hover:border-indigo-700"
        >
          Click me
        </button>
      </div>
    </>
  );
};
export default HookStateEffect;

import React from "react";

const nested = [
  {
    id1: "Hobby",
    id2: "All the basic for starting a new business",
    id3: "12",
    id4: "/mo",
    id5: "Buy Hobby",
    id6: "WHAT'S INCLUDED",

    data: ["the code in the loop will run", "over and over again"],
  },
  {
    id1: "Freelancer",
    id2: "All the basic for starting a new business",
    id3: "24",
    id4: "/mo",
    id5: "Buy Freelancer",
    id6: "WHAT'S INCLUDED",

    data: [
      "This package includes the global command",
      "the code in the loop will run",
      "over and over again",
    ],
  },
  {
    id1: "Startup",
    id2: "All the basic for starting a new business",
    id3: "32",
    id4: "/mo",
    id5: "Buy Startup",
    id6: "WHAT'S INCLUDED",

    data: [
      "This package includes the global command",
      "This package includes the global command",
      "the code in the loop will run",
      "over and over again",
    ],
  },
  {
    id1: "Enterprise",
    id2: "All the basic for starting a new business",
    id3: "48",
    id4: "/mo",
    id5: "Buy Enterprise",
    id6: "WHAT'S INCLUDED",

    data: [
      "the code in the loop will run",
      "over and over again",
      "This package includes the global command",
      "This package includes the global command",
      "This package includes the global command",
      "This package includes the global command",
      "This package includes the global command",
    ],
  },
];
const Pricingpln = () => {
  return (
    <div className="p-10 ">
      <div className=" border  shadow rounded">
        <div className="text-center p-10">
          <p className=" font-extrabold text-6xl mb-5 mt-10 text-opacity-50">
            Pricing Plans
          </p>
          <p className="font-normal text-gray-500 text-2xl mb-10 text-opacity-75 ">
            Start building for free, then add a site plan to go live. Account
            plans unlock new features
          </p>
          <div
            className="px-96 mx-72
           mb-10"
          >
            <div className="bg-gray-100  shadow rounded-lg  flex justify-center h-10 border-2 border-gray-100">
              <button
                className="w-56 font-semibold rounded-lg"
                id="BTwhite1"
                onClick={() => {
                  document.getElementById("BTwhite1").style.backgroundColor =
                    "white";
                }}
              >
                Monthly billing
              </button>
              <button
                className="w-56  border-l font-semibold rounded-lg"
                id="BTwhite2"
                onClick={() => {
                  document.getElementById("BTwhite2").style.backgroundColor =
                    "white";
                }}
              >
                Yearly billing
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center px-10">
          {nested.map((item) => (
            <div className=" border  m-10 mb-40 rounded-lg shadow ">
              <div className="p-5 border-b">
                <p className="font-bold text-lg mb-5 text-opacity-75 ">
                  {item.id1}
                </p>
                <p className="text-sm font-semibold text-gray-500 mb-5 ">
                  {item.id2}
                </p>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-award font-bold mt-2 -ml-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                  </svg>{" "}
                  <p className="font-extrabold text-4xl mb-5">{item.id3}</p>{" "}
                  <p className="font-semibold text-gray-500 mt-4 text-base">
                    {item.id4}
                  </p>
                </div>
                <div className="bg-gray-800 text-white h-10 mt-5 text-center shadow rounded-lg">
                  <p className="p-2">{item.id5}</p>
                </div>
              </div>
              <div className="p-5">
                <div className="">
                  <p className="font-semibold text-black text-sm">{item.id6}</p>
                </div>
                <div className="flex mb-40 p-5">
                  <p className="text-sm font-semibold text-gray-500 mb-5">
                    {item.data.map((data2) => (
                      <div className="pt-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          fill="currentColor"
                          class="bi bi-check text-green-600 -ml-6  -mb-6 "
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                        {data2}
                      </div>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Pricingpln;

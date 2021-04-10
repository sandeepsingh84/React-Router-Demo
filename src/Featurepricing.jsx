import React from "react";
const data1 = [
  {
    serial: 1,
    id1: " FULL-FEATURED",
    duplicateEntity: "Home",
    id2: "Everything you need to talk with your coustomer",
    id3: "List view",
    id4:
      "Reserve Bank of India has released its latest notification for the recruitment of Office Attendants. Eligible candidates may apply for 841 posts of “Office Attendants” in various offices of the bank.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="45"
        fill="currentColor"
        class="bi bi-list bg-indigo-600 text-white rounded "
        viewBox="-6 -6 28 28"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    ),
  },
  {
    serial: 2,
    id3: "Company",
    id4:
      "Reserve Bank of India has released its latest notification for the recruitment of Office Attendants. Eligible candidates may apply for 841 posts of “Office Attendants” in various offices of the bank.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="45"
        fill="currentColor"
        class="bi bi-aspect-ratio bg-indigo-600 text-white rounded"
        viewBox="-6 -6 28 28"
      >
        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
        <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" />
      </svg>
    ),
  },
  {
    serial: 3,
    id3: "Boards",
    duplicateEntity: "Home",
    id4:
      "Reserve Bank of India has released its latest notification for the recruitment of Office Attendants. Eligible candidates may apply for 841 posts of “Office Attendants” in various offices of the bank.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="45"
        fill="currentColor"
        class="bi bi-bag-dash bg-indigo-600 text-white rounded"
        viewBox="-6 -6 28 28"
      >
        <path
          fill-rule="evenodd"
          d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
        />
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
      </svg>
    ),
  },
  {
    serial: 4,
    id3: "Teams",
    id4:
      "Reserve Bank of India has released its latest notification for the recruitment of Office Attendants. Eligible candidates may apply for 841 posts of “Office Attendants” in various offices of the bank.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="45"
        fill="currentColor"
        class="bi bi-binoculars bg-indigo-600 text-white rounded"
        viewBox="-6 -6 28 28"
      >
        <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z" />
      </svg>
    ),
  },
];

const datatick = [
  {
    san: "Unlimited projects",
  },
  {
    san: "Unlimited storage",
  },
  {
    san: "Cancel anytime",
  },
];
const datatick2 = [
  {
    san2: "No per user fees",
  },
  {
    san2: "24/7 Support",
  },
  {
    san2: "Cancel anytime",
  },
];
const array1 = ["this is a pen", "hghghg", "kjjkjk"];
const array2 = ["this is my pc", "this is your pc", "gjgjkkj"];
const st = "this is my computer";
console.log(st.slice(0, st.length), "message");
console.log([...array1, ...array2], array1.concat(array2), "Merge Array");
//default function calling
// function name(){

// }

const newData = data1?.filter((item) => item?.id3 === "Boards");
const findData = data1?.find((item) => item?.id3 === "Boards");
console.log("findData", findData);
//arrow function
// const function_name = () =>{}
const newIndex = datatick?.findIndex(
  (item) => item?.san === "Unlimited storage"
);
console.log("newIndex", newIndex);
//find function
const result = data1?.find((finditem) => finditem?.duplicateEntity === "Home");
console.log("result", result);
//functional components v/s class components
const Featurepricing = ({ count, setCount, getName }) => {
  console.log("count from imported file", count);

  // callback function
  getName("muskan");

  return (
    <>
      <div className="m-10 mx-60 border border-gray-400 rounded flex  ">
        <div className="w-3/5 ml-5 mt-20 mr-20 mb-10">
          {data1?.map((item) => (
            <div className="" key={item?.serial}>
              <p className="font-semibold text-lg text-indigo-600 mb-2">
                {item.id1}
              </p>
              <p className="font-extrabold text-4xl mb-10">{item.id2}</p>
              <div className="flex">
                {item?.svg}
                <div className=" ml-4 -mt-1">
                  <p className="font-semibold text-xl text-gray-700 mb-2">
                    {item.id3}
                  </p>
                  <p className="text-gray-500">{item.id4}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-indigo-600 p-10 w-3/4 pl-24">
          <div className="flex justify-center -ml-1 mt-44">
            <div className="flex p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                class="bi bi-award-fill text-white "
                viewBox="0 0 16 16"
              >
                <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
              </svg>
              <div className="">
                <p className="font-extrabold text-white text-5xl mb-2 -mt-2">
                  99
                </p>
                <p className="font-medium text-white text-opacity-75 -ml-5">
                  Setup fee
                </p>
              </div>
            </div>
            <div className="p-8">
              <p className="text-white font-medium text-3xl text-opacity-75">
                +
              </p>
            </div>
            <div className="flex p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                class="bi bi-award-fill text-white"
                viewBox="0 0 16 16"
              >
                <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
              </svg>
              <div className="">
                <p className="font-extrabold text-white text-5xl mb-2 -mt-2">
                  4
                </p>
                <p className="font-medium text-white text-opacity-75 -ml-10">
                  per month
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-0.5 gap-y-2 ">
            <div className=" bg-indigo-700 text-white rounded  ">
              {datatick.map((tick) => (
                <div className="flex p-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="24"
                    fill="currentColor"
                    class="bi bi-check2 text-white text-opacity-75  "
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <p className="ml-2 -mt-0.5 mr-10 ">{tick.san}</p>
                </div>
              ))}
            </div>
            <div className=" bg-indigo-700 text-white rounded">
              {datatick2.map((tick2) => (
                <div className="flex p-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="24"
                    fill="currentColor"
                    class="bi bi-check2 text-white text-opacity-75 "
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <p className="ml-2 -mt-0.5 mr-10">{tick2.san2}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white mt-10 rounded-lg mx-20">
            <p className="text-indigo-600 p-5 text-center font-semibold text-lg">
              Get started today
            </p>
          </div>
          <div className="mt-5">
            <p className="p-5 text-center font-semibold text-base text-white text-opacity-75">
              Try Workflow Lite for free{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-3/5 ml-5 mt-20 mr-20 mb-10">
        {/* anonymous function */}
        {newData.map((item) => (
          <div className="" key={item?.serial}>
            <p className="font-semibold text-lg text-indigo-600 mb-2">
              {item.id1}
            </p>
            <p className="font-extrabold text-4xl mb-10">{item.id2}</p>
            <div className="flex">
              {item?.svg}
              <div className=" ml-4 -mt-1">
                <p className="font-semibold text-xl text-gray-700 mb-2">
                  {item.id3}
                </p>
                <p className="text-gray-500">{item.id4}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* filter function */}
      {data1
        ?.filter((item) => item?.id3 === "Teams")
        .map((data) => (
          <div className="" key={data?.serial}>
            <p className="font-semibold text-lg text-indigo-600 mb-2">
              {data.id1}
            </p>
            <p className="font-extrabold text-4xl mb-10">{data.id2}</p>
            <div className="flex">
              {data?.svg}
              <div className=" ml-4 -mt-1">
                <p className="font-semibold text-xl text-gray-700 mb-2">
                  {data.id3}
                </p>
                <p className="text-gray-500">{data.id4}</p>
              </div>
            </div>
          </div>
        ))}
      {data1
        ?.filter((item1) => item1?.serial === 2)
        .map((dataa) => (
          <div className="flex">
            {dataa?.svg}
            <div className=" ml-4 -mt-1">
              <p className="font-semibold text-xl text-gray-700 mb-2">
                {dataa?.id3}
              </p>
              <p className="text-gray-500">{dataa?.id4}</p>
            </div>
          </div>
        ))}
      {/* find function */}
      {result && (
        <div className="flex">
          {result?.svg}
          <div className=" ml-4 -mt-1">
            <p className="font-semibold text-xl text-gray-700 mb-2">
              {result?.id3}
            </p>
            <p className="text-gray-500">{result?.id4}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default Featurepricing;

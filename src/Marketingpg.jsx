import React from "react";

const data = [
  {
    name: "How do you make holy water?",
  },
  {
    name: "What do you call somebody with no body and no nose?",
  },
  {
    name: "Why do you never see Elephants hiding on trees?",
  },
  {
    name: "Why can't you hear a pterodactyl go to the bathroom?",
    id: 2,
  },
  {
    name: "Why did the invisible man turn down the job offer?",
    id: 1,
  },
];

const Marketingpg = () => {
  return (
      <div className="p-20 justify-ce">
      <div className="border border-gray-200 rounded-lg">
        <div className="flex  border-b border-gray-200 tracking-wider justify-between">
            <div className="flex">
          <div className=" h-12 text-lg font-semibold font-sans text-gray-500 subpixel-antialiased ml-6 mt-4 ">
            <p classname="font-sans">Centered accordion </p>{" "}
          </div>
          <div className="bg-gray-100 w-36 rounded-full py-3 px-6 ml-2 mt-5 h-6 font-bold text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14"
              fill="currentColor"
              class="bi bi-lock-fill -mx-4 -my-2 text-gray-500"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            </svg>
            <p className="ml-4 -m-3.5 font-sans text-gray-500 tracking-wider">PNG PREVIEW</p>
          </div></div>
<div className=" flex">
          <p className="text-right ml-96 pl-96 h-12 text-lg mt-4 font-bold font-sans text-green-600 tracking-wider">
            {" "}
            Get the HTML{" "}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-arrow-right-short font-bold text-right text-green-600 text-lg  pt-1  mt-4"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
          </div>
        </div>
    <div className="py-20 px-96 border bg-gray-50">
      <div className="py-8 border-b-2 border-gray-200 shadow">
        <p className="font-extrabold text-5xl text-center tracking-wider  ">
          Frequently asked questions
        </p>
      </div>
      <div className="py-8 border-b border-gray-200">
        <p className="font-bold text-lg text-gray pb-12 tracking-wider">
          Whats's the best thing about Switzerland?
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-chevron-up ml-auto font-extrabold text-gray-400 shadow -mt-16"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        <p className="font-medium text-gray-400 tracking-wider mr-5  flex-shrink">
          {" "}
          I dont't know, but the flag is big plus.Every utility class in
          Tailwind can be applied conditionally at different breakpoints Utilities for controlling the font weight of an element
        </p>
      </div>

      {data.map((item) => (
        <div className="font-bold text-lg text-gray py-8 border-b border-gray-200 tracking-wider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-chevron-down ml-auto font-extrabold text-gray-400 shadow -mb-6"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
          {item.name}
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};
export default Marketingpg;

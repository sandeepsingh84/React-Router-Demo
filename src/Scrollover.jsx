import React from "react";
const div1 = [
  {
    serial: 1,
    name: "find the length of a string",
  },
  {
    serial: 2,
    name: "RBI Office Attendants Recruitment",
  },
  {
    serial: 3,
    name: "We’re so excited to have you here",
  },
];
const Scrollover = () => {
  return (
    <div className="border m-5 h-auto">
      <div className="h-3/4 bg-gray-800 text-center pb-96">
        <p className="text-white text-xl text-opacity-75 font-semibold pt-20">
          PRICING
        </p>
        <p className="text-white text-5xl font-bold mb-5">
          The right price for you,whoever you are
        </p>
        <p className="text-white text-2xl text-opacity-75">
          {" "}
          use quotes inside a string, as long as they don't match the quotes
          surrounding
        </p>
        <p className="text-white text-2xl text-opacity-75 mb-10">
          find the length of a string, use the built-in length{" "}
        </p>
       
       
      </div>
      
      <div className="mb-56 bg-white  ">
      <div className="flex  justify-center ">
          <div className=" border bg-white  -mt-72 mr-14 rounded-l-lg shadow-md">
            <div className="rounded-tl-lg">
              <div className="text-center  pt-10 pb-5">
                <p className="text-2xl font-semibold">Hobby</p>
              </div>
              <div className="flex justify-center pb-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-award"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                </svg>
                <p className="text-7xl font-extrabold -mt-5">79</p>
                <p className="text-gray-500 text-xl ml-3 -mb-2">/month</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-bl-lg">
              {div1.map((item) => (
                <div className="flex mb-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="24"
                    fill="currentColor"
                    class="bi bi-check2 text-green-600"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <p className="text-gray-600 text-base font-semibold ml-3">
                    {item.name}
                  </p>
                </div>
              ))}
              <div className="bg-white rounded  text-center mt-10 rounded-lg shadow-md  text-lg">
                <p className="font-semibold p-3 text-indigo-600">
                  Start your trial
                </p>
              </div>
            </div>
          </div>
          <div className=" border-2 border-indigo-600 rounded-lg shadow-2xl  -mt-96 -m-14 w-1/3 ">
          
            <div className="bg-white rounded-t-lg">
            <div className="flex justify-center "> <div className="bg-indigo-600 -mt-4 overflow-y-visible rounded-full text-center p-0.5 text-white text-sm font-semibold  py-1 w-32"><p className="">MOST POPULAR</p></div></div>
              <div className="text-center  pt-10 pb-5">
                <p className="text-2xl font-semibold">Growth</p>
              </div>
              <div className="flex justify-center pb-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-award"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                </svg>
                <p className="text-7xl font-extrabold -mt-5">149</p>
                <p className="text-gray-500 text-xl ml-3 -mb-2">/month</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-b-lg">
              {div1.map((item) => (
                <div className="flex mb-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="24"
                    fill="currentColor"
                    class="bi bi-check2 text-green-600"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <p className="text-gray-600 text-base font-semibold ml-3">
                    {item.name}
                  </p>
                </div>
              ))}
              <div className="bg-indigo-600 rounde m-3  text-center mt-10 rounded-lg shadow-md  text-lg">
                <p className="font-semibold p-3 text-white">
                  Start your trial
                </p>
              </div>
            </div>
          </div>
          <div className=" border shadow-md -mt-72 ml-14 rounded-r-lg">
            <div className="bg-white rounded-tr-lg">
              <div className="text-center  pt-10 pb-5">
                <p className="text-2xl font-semibold">Scale</p>
              </div>
              <div className="flex justify-center pb-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-award"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                </svg>
                <p className="text-7xl font-extrabold -mt-5">349</p>
                <p className="text-gray-500 text-xl ml-3 -mb-2">/month</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-br-lg">
              {div1.map((item) => (
                <div className="flex mb-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="24"
                    fill="currentColor"
                    class="bi bi-check2 text-green-600"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <p className="text-gray-600 text-base font-semibold ml-3">
                    {item.name}
                  </p>
                </div>
              ))}
              <div className="bg-white rounde m-3  text-center mt-10 rounded-lg shadow-md  text-lg">
                <p className="font-semibold p-3 text-indigo-600">
                  Start your trial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Scrollover;

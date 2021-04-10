import React, { useEffect, useState } from "react";

const Gridpic = () => {
  return (
    <div className="p-10 ">
      <div className="border border-gray-200 rounded-lg">
        <div className="flex  border-b border-gray-200 tracking-wider justify-between">
          <div className=" h-12 text-lg font-semibold font-sans text-gray-500 subpixel-antialiased ml-6 mt-4 ">
            <p classname="font-sans">Split with image </p>{" "}
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
            <p className="ml-4 -m-3.5 font-sans text-gray-500">PNG PREVIEW</p>
          </div>

          <p className="text-right ml-96 pl-96 h-12 text-lg mt-4 font-bold font-sans text-green-600 ">
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
        <div className="p-10 ">
          <h1 className="font-black font-sans antialiased text-4xl">
            Our Team
          </h1>
          <p className="font-medium font-sans subpixel-antialiased text-lg text-gray-500 mt-5">
            A good practice is to put the event handler as a method in the
            component class
          </p>
        </div>
        <div className=" flex">
          <div className="p-10 ">
            <img
              className=" rounded-lg shadow-xl "
              src="https://images.unsplash.com/photo-1613626204612-701f27ba478f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvcml6b250YWwlMjBmZW1hbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="1img"
            ></img>
            <p className="font-medium font-sans text-lg text-gray-700 mt-5">
              {" "}
              Lindsay Waltson
            </p>
            <p className="font-medium font-sans text-lg text-indigo-600 mt-1">
              Front-end Developer
            </p>
            <div className="flex mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="currentColor"
                class="bi bi-twitter text-gray-400"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-linkedin rounded text-gray-400 ml-4 "
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </div>
          </div>
          <div className="p-10">
            <img
              className=" rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1609695921731-603f8ca00dda?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGhvcml6b250YWwlMjBmZW1hbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="1img"
            ></img>
            <p className="font-medium font-sans text-lg text-gray-700 mt-5">
              {" "}
              Corteny Hennery
            </p>
            <p className="font-medium font-sans text-lg text-indigo-600 mt-1">
              Designer
            </p>
            <div className="flex mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                fill="currentColor"
                class="bi bi-twitter text-gray-400"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-linkedin rounded text-gray-400 ml-4"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </div>
          </div>
          <div className="p-10">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="1img"
            ></img>
            <p className="font-medium font-sans text-lg text-gray-700 mt-5">
              {" "}
              Tom Cook
            </p>
            <p className="font-medium font-sans text-lg text-indigo-600 mt-1">
              Director,Product Development
            </p>
            <div className="flex mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                fill="currentColor"
                class="bi bi-twitter text-gray-400"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-linkedin rounded text-gray-400 ml-4"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </div>
          </div>
        </div>
        <div className=" flex">
          <div className="p-10 ">
            <img
              className=" rounded-lg shadow-xl "
              src="https://images.unsplash.com/photo-1559843811-a733d94b6f8a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODl8fGhvcml6b250YWwlMjBmZW1hbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="1img"
            ></img>
            <p className="font-medium font-sans text-lg text-gray-700 mt-5">
              Whitney Francis
            </p>
            <p className="font-medium font-sans text-lg text-indigo-600 mt-1">
              Copywritter
            </p>
            <div className="flex mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="currentColor"
                class="bi bi-twitter text-gray-400"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-linkedin rounded text-gray-400 ml-4 "
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </div>
          </div>
          <div className="p-10">
            <img
              className=" rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjV8fG1hbGVzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
              alt="1img"
            ></img>
            <p className="font-medium font-sans text-lg text-gray-700 mt-5">
              {" "}
              Leonar Krasner
            </p>
            <p className="font-medium font-sans text-lg text-indigo-600 mt-1">
              Senior-Designer
            </p>
            <div className="flex mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                fill="currentColor"
                class="bi bi-twitter text-gray-400"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-linkedin rounded text-gray-400 ml-4"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </div>
          </div>
          <div className="p-10">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTh8fG1hbGVzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="1img"
            ></img>
            <p className="font-medium font-sans text-lg text-gray-700 mt-5">
              {" "}
              Floyd Miles
            </p>
            <p className="font-medium font-sans text-lg text-indigo-600 mt-1">
              Principal Designer
            </p>
            <div className="flex mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                fill="currentColor"
                class="bi bi-twitter text-gray-400"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-linkedin rounded text-gray-400 ml-4"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-col md:grid-flow-col  grid-cols-3 grid-rows-3 gap-4 mt-20 border border-gray-200 rounded-lg  bg-gray-100">
        <div className="p-10"><img
              className=" rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1609695921731-603f8ca00dda?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGhvcml6b250YWwlMjBmZW1hbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="1img"
            ></img>
            <p className="font-medium font-sans text-lg text-gray-700 mt-5">
              {" "}
              Corteny Hennery
            </p><p className="font-medium font-sans text-lg text-indigo-600 mt-1">
              Designer </p></div>
        <div className="p-10"><img
              className=" rounded-lg shadow-xl "
              src="https://images.unsplash.com/photo-1613626204612-701f27ba478f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvcml6b250YWwlMjBmZW1hbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="1img"
            ></img>
            <p className="font-medium font-sans text-lg text-gray-700 mt-5">
              {" "}
              Lindsay Waltson
            </p>
            <p className="font-medium font-sans text-lg text-indigo-600 mt-1">
              Front-end Developer
            </p></div>
        <div className="p-10"><img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="1img"
            ></img>
            <p className="font-medium font-sans text-lg text-gray-700 mt-5">
              {" "}
              Tom Cook
            </p>
            <p className="font-medium font-sans text-lg text-indigo-600 mt-1">
              Director,Product Development
            </p></div>
        <div className="p-10"><img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="1img"
            ></img>
            <p className="font-medium font-sans text-lg text-gray-700 mt-5">
              {" "}
              Tom Cook
            </p>
            <p className="font-medium font-sans text-lg text-indigo-600 mt-1">
              Director,Product Development
            </p></div>
        <div className="p-10"><img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="1img"
            ></img>
            <p className="font-medium font-sans text-lg text-gray-700 mt-5">
              {" "}
              Tom Cook
            </p>
            <p className="font-medium font-sans text-lg text-indigo-600 mt-1">
              Director,Product Development
            </p></div>
        <div className="p-10"><img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="1img"
            ></img>
            <p className="font-medium font-sans text-lg text-gray-700 mt-5">
              {" "}
              Tom Cook
            </p>
            <p className="font-medium font-sans text-lg text-indigo-600 mt-1">
              Director,Product Development
            </p></div>
        <div className="p-10"><img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="1img"
            ></img>
            <p className="font-medium font-sans text-lg text-gray-700 mt-5">
              {" "}
              Tom Cook
            </p>
            <p className="font-medium font-sans text-lg text-indigo-600 mt-1">
              Director,Product Development
            </p></div>
        <div className="p-10"><img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="1img"
            ></img>
            <p className="font-medium font-sans text-lg text-gray-700 mt-5">
              {" "}
              Tom Cook
            </p>
            <p className="font-medium font-sans text-lg text-indigo-600 mt-1">
              Director,Product Development
            </p></div>
        <div className="p-10"><img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="1img"
            ></img>
            <p className="font-medium font-sans text-lg text-gray-700 mt-5">
              {" "}
              Tom Cook
            </p>
            <p className="font-medium font-sans text-lg text-indigo-600 mt-1">
              Director,Product Development
            </p></div>
      </div>
    </div>
  );
};
export default Gridpic;

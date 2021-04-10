import React, { useState, useEffect } from "react";
import TableHookChild from "./TableHookChild";
import TableHookRunner from "./TableHookRunners";
import TableHookChild2 from "./TableHookChild2";
import TableHookTotal from "./TableHookTotal";

const DivArray = [
  {
    id: "1000",
    name: "Getup early morning at 6 am",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        className="bi bi-bookmark-check text-green-600"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
        />
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
      </svg>
    ),
  },
  {
    id: "1001",
    name: "take your energy drink",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        class="bi bi-archive text-green-600"
        viewBox="0 0 16 16"
      >
        <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
      </svg>
    ),
  },
  {
    id: "1002",
    name: "Heads towards north",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        class="bi bi-alarm-fill text-green-600"
        viewBox="0 0 16 16"
      >
        <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
      </svg>
    ),
  },
  {
    id: "1003",
    name: "Start the ride",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        class="bi bi-award text-green-600"
        viewBox="0 0 16 16"
      >
        <path d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
      </svg>
    ),
  },
  {
    id: "1004",
    name: "reach the destination",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        class="bi bi-badge-3d-fill text-green-600"
        viewBox="0 0 16 16"
      >
        <path d="M10.157 5.968h-.844v4.06h.844c1.116 0 1.621-.667 1.621-2.02 0-1.354-.51-2.04-1.621-2.04z" />
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm5.184 4.368c.646 0 1.055.378 1.06.9.008.537-.427.919-1.086.919-.598-.004-1.037-.325-1.068-.756H3c.03.914.791 1.688 2.153 1.688 1.24 0 2.285-.66 2.272-1.798-.013-.953-.747-1.38-1.292-1.432v-.062c.44-.07 1.125-.527 1.108-1.375-.013-.906-.8-1.57-2.053-1.565-1.31.005-2.043.734-2.074 1.67h1.103c.022-.391.383-.751.936-.751.532 0 .928.33.928.813.004.479-.383.835-.928.835h-.632v.914h.663zM8.126 11h2.189C12.125 11 13 9.893 13 7.985c0-1.894-.861-2.984-2.685-2.984H8.126V11z" />
      </svg>
    ),
  },
];

const DivArrayRight = [
  {
    id: "2000",
    name: "take rest at 12 noon",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        class="bi bi-basket-fill text-green-600"
        viewBox="0 0 16 16"
      >
        <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
      </svg>
    ),
  },
  {
    id: "2001",
    name: "take your meal at 1 pm",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        class="bi bi-badge-vr text-green-600"
        viewBox="0 0 16 16"
      >
        <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
        <path d="M4.508 11h1.429l1.99-5.999H6.61L5.277 9.708H5.22L3.875 5.001H2.5L4.508 11zm6.387-5.999H8.5V11h1.173V8.763h1.064L11.787 11h1.327L11.91 8.583C12.455 8.373 13 7.779 13 6.9c0-1.147-.773-1.9-2.105-1.9zm-1.222 2.87V5.933h1.05c.63 0 1.05.347 1.05.989 0 .633-.408.95-1.067.95H9.673z" />
      </svg>
    ),
  },
  {
    id: "2002",
    name: "Come back at 3 pm",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        class="bi bi-binoculars text-green-600"
        viewBox="0 0 16 16"
      >
        <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z" />
      </svg>
    ),
  },
  {
    id: "2003",
    name: "Take rest for one day",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        class="bi bi-bookmark-star text-green-600"
        viewBox="0 0 16 16"
      >
        <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z" />
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
      </svg>
    ),
  },
  {
    id: "2004",
    name: "continue daily routine",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        class="bi bi-bootstrap text-green-600"
        viewBox="0 0 16 16"
      >
        <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z" />
        <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z" />
      </svg>
    ),
  },
];

const TableHook = () => {
  const [cycleRun, setCycleRun] = useState(0);
  const [cycleSouth, setCycleSouth] = useState(0);
  const [cycleRight, setCycleRight] = useState(0);
  const [runnerName, setRunnerName] = useState(["Sandeep"]);
  const [filterDel, setFilterDel] = useState(DivArray);
  const [deletedName, setDeletedName] = useState();
  const [rightFilterDel, setRightFilterDel] = useState(DivArrayRight);
  const [rightDeletedName, setRightDeletedName] = useState();
  // const [displayPara, setDisplayPara] = useState(false);

  // const index= runnerName?.findIndex((item)=> item?.runnerName==="Sandeep");
  useEffect(() => {
    console.log("filterDel", filterDel);
    if (filterDel?.length !== DivArray?.length) itemDeleted();

    console.log(`rightFilterDel`, rightFilterDel);
    if (rightFilterDel?.length < DivArrayRight?.length) rightItemDeleted();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterDel, deletedName, rightFilterDel]);

  const [runTotal, setRunTotal] = useState(0);
  const itemDeleted = () => {
    alert(`${deletedName} has been deleted`);
  };

  const rightItemDeleted = () => {
    alert(`${rightDeletedName} has been deleted`);
  };
  // AXIOS EXAMPLE
  //then :- promises
  // axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then((res) => {
  //       setPersons(res);
  //     })
  return (
    <>
      <div className=" p-5 bg-gray-50">
        <div className="flex justify-between rounded-md shadow bg-purple-100 h-16 text-center">
          <p className="font-bold text-4xl text-purple-600 pl-5 mt-2">
            Heads Towards North
          </p>
          <div className="flex ">
            <div className="mr-10 text-center mt-4 ">
              <TableHookRunner
                runnerName={runnerName}
                setRunnerName={setRunnerName}
                cycleRun={cycleRun}
                setCycleRun={setCycleRun}
                cycleSouth={cycleSouth}
                setCycleSouth={setCycleSouth}
                runTotal={runTotal}
                setRunTotal={setRunTotal}
                cycleRight={cycleRight}
                setCycleRight={setCycleRight}
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="currentColor"
              className="bi bi-bicycle text-indigo-700 mt-2 mr-4"
              viewBox="0 0 16 16"
            >
              <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443l-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057L9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
            </svg>
          </div>
        </div>
        <div className="flex justify-between mt-5 text-purple-600">
          <div
            className="text-2xl text-bold text-center"
            onClick={() => {
              setCycleRun(cycleRun + 5);
            }}
          >
            <p className="font-extrabold mb-5">North</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="bi bi-bicycle text-indigo-700 text-center ml-10"
              viewBox="0 0 16 16"
            >
              <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443l-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057L9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
            </svg>
            <div className="mt-5 text-xl bg-gray-100 rounded-lg p-2 shadow">
              {cycleRun} kms north
            </div>
          </div>
          <TableHookChild
            cycleSouth={cycleSouth}
            setCycleSouth={setCycleSouth}
          />
          <TableHookChild2
            cycleRight={cycleRight}
            setCycleRight={setCycleRight}
          />
        </div>
        <div className="flex justify-between mt-20 mb-20 border-t pt-10 ">
          <div className="w-full mr-20 ">
            {filterDel.length === 0 && (
              <div className="w-full mr-15 bg-white text-center p-10 py-20 rounded-lg shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  className="bi bi-search ml-36 text-gray-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <p className="mt-10 font-bold text-2xl text-purple-400">
                  No Task Found Yet !
                </p>
              </div>
            )}
            {filterDel.map((item) => (
              <div className="bg-white border-b rounded-md shadow p-3 hover:bg-purple-100 flex justify-between hover:shadow-lg ">
                <div className="flex">
                  {item?.svg}
                  <p className="font-bold text-sm ml-5 text-gray-700">
                    {item?.name}
                  </p>
                </div>
                <div>
                  <button
                    className=" font-bold text-lg ml-5 bg-red-500 rounded-lg px-3"
                    // we were using direct array first for using filter then it is not showing effects bcoz of REAL DOM,then we use VIrtual DOM by using another state in which we declare this array as initial value
                    // bcoz of virtual DOM and REAL DOM effects we use another state (filterDel) as array in which we are passing another array as an initial state, which is usestate declared above
                    onClick={() => {
                      console.log("item?id", item?.name);
                      setDeletedName(item?.name);
                      setFilterDel(
                        filterDel.filter((delitem) => delitem?.id !== item?.id)
                      );
                      // DivArray.filter((delitem) => delitem !== item);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className=" text-center w-full">
            <TableHookTotal
              runTotal={runTotal}
              setRunTotal={setRunTotal}
              cycleRun={cycleRun}
              setCycleRun={setCycleRun}
              cycleSouth={cycleSouth}
              setCycleSouth={setCycleSouth}
              cycleRight={cycleRight}
              setCycleRight={setCycleRight}
            />
          </div>
          <div className="w-full ml-20">
            {rightFilterDel.length === 0 && (
              <div className="w-full mr-15 bg-white text-center p-10 py-20 rounded-lg shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  className="bi bi-search ml-36 text-gray-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <p className="mt-10 font-bold text-2xl text-purple-400">
                  No Task Found Yet !
                </p>
              </div>
            )}
            {rightFilterDel.map((item) => (
              <div className="bg-white border-b rounded-md shadow p-3 hover:bg-purple-100 flex justify-between hover:shadow-lg">
                <div className="flex">
                  {item?.svg}

                  <p className="font-bold text-sm ml-5 text-gray-700">
                    {item?.name}
                  </p>
                </div>
                <button
                  className="font-bold text-lg ml-5 bg-red-500 rounded-lg px-3"
                  // we were using direct array first for using filter then it is not showing effects bcoz of REAL DOM,then we use VIrtual DOM by using another state in which we declare this array as initial value
                  // bcoz of virtual DOM and REAL DOM effects we use another state (rightFIlterDel) as array in which we are passing another array as an initial state, which is usestate declared above
                  onClick={() => {
                    setRightFilterDel(
                      rightFilterDel?.filter((delItem) => delItem !== item)
                    );
                    setRightDeletedName(item?.name);
                    console.log(`rightDeletedName`, item?.name);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default TableHook;

import React, { useEffect, useState } from "react";
import axios from "axios";

const RandomUserApiGet = () => {
  const [respData, setRespData] = useState([]);
  const [showData, setShowData] = useState([]);
  console.log("stateresp", respData);
  console.log("Showdata", showData);
  const getUsers = () => {
    axios.get(`https://randomuser.me/api`).then((response) => {
      if (response) {
        setRespData(response?.data?.results);
      }

      console.log("Response", response);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="border  ">
      <div className="bg-gray-900 h-56">gfdg</div>
      <div className="border -mt-40 bg-white mx-64 rounded-md">
        <div className="border-b h-32 f"></div>
        <div className="flex justify-center ">
          {respData.length > 0 &&
            respData?.map((Item) => (
              <img
                className="border p-1 rounded-full shadow-lg -mt-28 h-40 w-40"
                src={Item?.picture?.large}
                alt="image here"
              ></img>
            ))}
        </div>
        <div className="">
            
        </div>
        <div
          className=" m-10"
      // onClick={() => setShowData(respData?.filter((filName)=> filName === name?.first))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default RandomUserApiGet;

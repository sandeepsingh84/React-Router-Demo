import React, { useEffect, useState } from "react";
import axios from "axios";


const ApiCalling = () => {
  const [respData, setRespData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [viewFilter, setViewFilter] = useState([]);
  console.log(`respData`, respData);
  console.log(`viewFilter`, viewFilter);
  const getUsers = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      if (response) {
        setShowLoading(false);
        setRespData(response.data);
      }

      // setLoading(true);
    });
  };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <div className=" ">
      <div className="text-center">
        <div className="bg-gray-500 font-bold text-5xl p-5 rounded-lg shadow-lg m-3">
          <p className="text-white">Contact's Index</p>
        </div>
        <button
          className="text-center bg-pink-500 rounded-lg shadow p-3 font-semibold focus:outline-none hover:shadow-lg hover:bg-pink-700 text-white"
          onClick={() => {
            setShowLoading(true);
            getUsers();
          }}
        >
          Get Contacts
        </button>
      </div>
      <div className="flex  m-3 ">
        <div className=" bg-gray-50 shadow-md rounded-lg overflow-y-auto h-96 w-full mr-3 p-3">
          {respData.length > 0 ? (
            respData.map((item) => (
              <div
                className="bg-white rounded-lg shadow-md m-5 p-3 flex justify-between hover:bg-pink-50 hover:shadow-lg"
                key={item?.id}
              >
                <div className="text-md font-bold text-gray-600">
                  <p className="">Name : {item?.name}</p>
                  <p className="">User Name: {item?.username}</p>
                  <p className="">Address: {item?.address?.city}</p>
                  <p className="">Company: {item?.company?.name}</p>
                  <p className="">Email : {item?.email}</p>
                  <p className="">Phone : {item?.phone}</p>
                </div>
                <div className="">
                  <button
                    className="focus:outline-none p-3 bg-gray-400 rounded-lg shadow font-bold text-white my-10 hover:bg-pink-600 hover:shadow-lg"
                    onClick={() => {
                      setViewFilter(() =>
                        respData?.filter(
                          (filtItem) => filtItem?.id === item?.id
                        )
                      );
                    }}
                  >
                    View
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="">
              <p className="">{showLoading ? "...loading" : "Welcome"}</p>
            </div>
          )}
        </div>

        <div className="bg-gray-50 w-full p-5 text-center rounded-lg shadow-md">
          {viewFilter.length > 0 &&
            viewFilter?.map((itemm) => (
              <div
                className="bg-white rounded-lg shadow-lg h-80 mt-3 pt-10 font-semibold text-xl"
                key={itemm?.id}
              >
                <p className="text-3xl font-bold text-pink-500">
                  {itemm?.name}
                </p>
                <p className="text-gray-400">User Name: {itemm?.username}</p>
                <p className="text-gray-400">Address: {itemm?.address?.city}</p>
                <p className="text-gray-400">Company: {itemm?.company?.name}</p>
                <p className="text-gray-400">Email : {itemm?.email}</p>
                <p className="text-gray-400">Phone : {itemm?.phone}</p>{" "}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ApiCalling;

// .filter((filtItem) => filtItem?.id === 1)
// .map((viewItem) => (
// <div> console.log(`viewItem`, {viewItem})</div>

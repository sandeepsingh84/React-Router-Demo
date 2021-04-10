import React, { useState, useEffect } from "react";
import axios from "axios";
function QueryApi() {
  const [myQuery, setMyQuery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonQuery, setButtonQuery] = useState({});
  const [viewPost, setViewPost] = useState([]);
  const [rightloading, setRightLoading] = useState(false);

  console.log(`buttonQuery`, buttonQuery);
  console.log(`myQuery`, myQuery);
  console.log(`viewPost`, viewPost);
  const Queries = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then((response) => {
        if (response) {
          setLoading(false);
          setMyQuery(response.data);
        } else {
          setMyQuery(response.Error);
        }
      });
  };
  const ViewQueries = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?postId=${buttonQuery}`
      )
      .then((response) => {
        if (response) {
          console.log(`object`, response);
          setRightLoading(false);
          setViewPost(response.data);
        } else {
          setViewPost(response.Error);
        }
      });
  };
  useEffect(() => {
    ViewQueries();
  }, [buttonQuery]);
  return (
    <div className="m-10">
      <div className="bg-gray-600 text-center rounded-lg shadow-md p-5 ">
        <h1 className="font-bold text-5xl text-white">Get Queries Instantly</h1>
        {myQuery?.length > 0 ? (
          <button
            className=" focus:outline-none p-2 rounded-lg bg-white shadow-md font-semibold mt-5 hover:bg-red-700 hover:shadow-lg "
            onClick={() => {
              setMyQuery([]);
              setViewPost([]);
              setRightLoading(false);
              setButtonQuery({});
            }}
          >
            Clear!
          </button>
        ) : (
          <button
            className="focus:outline-none p-2 rounded-lg bg-white shadow-md font-semibold mt-5 hover:bg-red-700 hover:shadow-lg "
            onClick={() => {
              Queries();
              setLoading(true);
            }}
          >
            Get Queries
          </button>
        )}
      </div>
      <div className="flex mt-10 rounded-lg shadow-md border flex ">
        <div className="bg-blue-100 p-10 w-3/5 ">
          {myQuery?.length > 0 ? (
            myQuery
              ?.filter((filitem) => filitem.postId < 21)
              .map((item) => (
                <div
                  className="bg-white mb-5 p-5 rounded-lg shadow-md font-semibold text-md text-gray-500 flex justify-between"
                  key={item?.postId}
                >
                  <div className="">
                    <p className="font-bold text-xl text-pink-500">
                      {item?.name}
                    </p>
                    <p className="">{item?.email}</p>
                    <p className="">{item?.body}</p>
                  </div>
                  <div className="py-10 ml-5">
                    <button
                      className="focus:outline-none rounded-lg shadow bg-blue-200 p-2 text-black font-semibold hover:bg-gray-200 hover:shadow-lg"
                      onClick={() => {
                        setButtonQuery(item?.postId);
                        setRightLoading(true);
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
              ))
          ) : (
            <div className="bg-white rounded-lg shadow md text-4xl font-bold p-20 text-center text-gray-400">
              {loading ? "Loading.." : "Get Queries First!"}
            </div>
          )}
        </div>
        <div className="p-10 bg-gray-100 border-l w-2/5 ">
          {viewPost?.length > 0 ? (
            viewPost?.map((item) => (
              <div className="rounded-lg shadow-md mb-5 bg-white p-5 font-semibold text-md text-gray-500">
                <p className="font-bold text-xl text-pink-500">{item?.name}</p>
                <p className="">{item?.email}</p>
                <p className="">{item?.body}</p>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow md text-4xl font-bold p-20 text-center text-gray-400">
              {rightloading ? "Loading..." : "Welcome!"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QueryApi;

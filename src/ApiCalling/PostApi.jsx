import React, { useState, useEffect } from "react";
import axios from "axios";

const PostApi = () => {
  const [name, setName] = useState();
  const [resPost, setResPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({});
  console.log(`status`, status);
  console.log(`respost`, resPost);
  //   const GetReq = () => {
  //     axios
  //       .get(`https://jsonplaceholder.typicode.com/users`)
  //       .then((response) => console.log(`Getresponse`, response));
  //   };
  //   const users = () => {
  //     users.name = submitBtn;
  //   };

  const HandleSubmit = () => {
    const userData = {};
    userData.name = name;

    console.log(`userData`, userData);
    if (userData) {
      ReqPost(userData);
    }
    // delete userData.name;
  };

  // there is userData = users, users works like container of userData , u can also pass userData as a parameter here
  const ReqPost = (users) => {
    console.log(`users`, users);
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { users })
      .then((response) => {
        console.log(`response`, response);

        // if (response.status === 201) {
        //   axios
        //     .get(`https://jsonplaceholder.typicode.com/users`)
        //     .then((response) => {
        //       console.log(`response22`, response);
        setResPost(response.data);
        setStatus(response.status);
        setLoading(false);
        setName("");
        //     });
        // }
      });
  };

  return (
    <div className="m-5">
      <div className="">
        <h1 className="bg-gray-100 rounded-lg shadow-md font-bold text-5xl p-5 text-purple-600 ">
          Sign up
        </h1>
        <div className="mt-5 p-10 bg-gray-700">
          <input
            className="border focus:outline-none rounded-lg shadow p-2 w-56 font-semibold bg-white "
            placeholder="first name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button
            className="bg-white ml-5 p-2 rounded-lg shadow font-semibold text-purple-700 focus:outline-none hover:bg-purple-600 hover:text-white"
            onClick={() => {
              HandleSubmit();
              setLoading(true);
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="bg-gray-700 px-10 pb-10 text-center">
        {/* {resPost?.map((item) => ( */}
        <div className="bg-white rounded-lg shadow h-80 p-10 font-bold text-2xl">
          {status === 201 ? (
            <div className="bg-white rounded-lg ">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  fill="currentColor"
                  className="bi bi-person-check-fill text-green-500 "
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </div>
              <p className="text-3xl ">New User Created Succesfully !!</p>

              <p className="text-purple-600 mt-10">
                Welcome {resPost?.users?.name}
              </p>
            </div>
          ) : loading ? (
            "loading.."
          ) : (
            <p className="my-24">Sign Up first!</p>
          )}

          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default PostApi;

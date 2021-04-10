import React, { useState } from "react";
import axios from "axios";
import moment from "moment";

const PostSuccessful = () => {
  const [name, setName] = useState();
  const [job, setJob] = useState();
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState()
  const [createdResponse, setCreatedResponse] = useState();
  console.log(`created`, createdResponse);

  const Login = () => {
    const UserData = {};
    UserData.name = name;
    UserData.job = job;
    PostLogin(UserData);
    // console.log(`UserData`, UserData);
  };
  const PostLogin = (login) => {
    console.log(`login`, login);
    // console.log(`login`, login);
    // // ... spread operator
    axios.post(`https://reqres.in/api/users`, { ...login }).then((response) => {
      console.log(`response`, response);
      setCreatedResponse(response.data);
      setStatus(response.status)
      setLoading(false)
      setName("")
      setJob("")
    });
  };
  return (
    <div className="m-5">
      <div className="">
        <h1 className=" bg-gray-700 text-5xl font-bold text-white py-10 pl-5 rounded-lg shadow">
          Job Card
        </h1>
        <div className="mt-5 bg-gray-50 p-5 flex rounded-lg shadow">
          <div className="">
            <p className="font-bold text-green-600">Name</p>
            <input
              className="border p-2 rounded-lg shadow focus:outline-none font-semibold"
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="ml-5">
            <p className="font-bold text-green-600">Job</p>
            <input
              className="border p-2 rounded-lg shadow focus:outline-none font-semibold"
              placeholder="Enter your job"
              type="text"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            ></input>
          </div>
          <button
            className=" ml-5 focus:outline-none bg-white rounded-lg shadow px-3 h-12 my-5 font-bold text-green-600 hover:bg-gray-700 hover:text-white hover:shadow-lg"
            onClick={() => {Login()
            setLoading(true)
            setCreatedResponse("")
         }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg shadow mt-5 p-10">
        {status === 201 ? ( <div className="bg-white text-center font-bold text-xl rounded-lg shadow p-10">
        <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  fill="currentColor"
                  className="bi bi-person-check-fill text-green-600 "
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </div>
              <p className="text-3xl text-pink-400">Job card Created Successfully !!</p>
          <p className="text-xl mt-5 text-gray-300">Name-{createdResponse?.name}</p>
          <p className="text-gray-300">Job- {createdResponse?.job}</p>
          <p className="text-gray-300"> Job created on-
            {createdResponse &&
              moment(createdResponse?.createdAt).format("LLL")}
          </p>
        </div>): (<div className="bg-white text-center font-bold text-3xl rounded-lg shadow p-10 text-gray-400">{loading? "Loading..":"Make a job card first!!"}</div>)}
       
      </div>
    </div>
  );
};

export default PostSuccessful;

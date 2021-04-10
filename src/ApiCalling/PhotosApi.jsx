/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import axios from "axios";
import "./Style.css";

const PhotosApi = () => {
  const [photos, setPhotos] = useState([]);
  const [user, setuser] = useState(false);
  console.log(`photos`, photos);
  const UserPics = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => {
        if (response) {
          setuser(false);
          setPhotos(response?.data);
        } else {
          setPhotos(response?.Error);
        }
      });
  };

  return (
    <div className="text-center p-5 bg-gray-100">
      <div className="bg-gray-900 rounded-lg shadow-md p-5 mb-10">
        <div className="">
          <h1 className="font-semibold text-5xl text-white">
            Get Users at your Ease
          </h1>
        </div>
        <div className="mt-5">
          {photos?.length > 0 ? (
            <button
              className="focus:outline-none bg-white text-gray-600 font-semibold text-xl p-2 rounded-lg shadow-md hover:bg-gray-300 hover:text-blue-600"
              onClick={() => setPhotos([])}
            >
              Clear!
            </button>
          ) : (
            <button
              className="focus:outline-none bg-white text-gray-600 font-semibold text-xl p-2 rounded-lg shadow-md hover:bg-gray-300 hover:text-blue-600"
              onClick={() => {
                UserPics();
                setuser(true);
              }}
            >
              Get Details
            </button>
          )}
        </div>
      </div>
      <div className="  grid grid-flow-col grid-col-5 grid-rows-6 gap-4 h-full overflow-y-auto maindiv rounded-lg shadow-md p-10">
        {photos.length > 0 ? (
          photos
            ?.filter((filpics) => filpics.id < 31)
            .map((item) => (
              <div className="picpart bg-white bg-opacity-100 flex justify-between rounded-lg shadow-md   h-50 pt-10 hover:bg-gray-100  hover:shadow-2xl hover:ring-2">
                <div className="text-gray-600 p-2 font-semibold ">
                  {item?.title}
                </div>
                <img
                  className="rounded-full h-24 w-24 m-3 mb-10"
                  src={item?.url}
                  alt="image here"
                ></img>
                {/* <img className="" src={item?.thumbnailUrl} alt="image here"></img> */}
              </div>
            ))
        ) : (
          <div className="bg-gray-50 m-10 rounded-lg shadow-lg text-center font-bold text-5xl text-gray-300 h-80 pt-10">
            <div className="text-center mr-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="66"
                height="66"
                fill="currentColor"
                className="bi bi-emoji-dizzy w-full  m-10"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M9.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm-5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zM10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
              </svg>
            </div>
            {user ? "loading.." : "Users Not Found!"}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotosApi;

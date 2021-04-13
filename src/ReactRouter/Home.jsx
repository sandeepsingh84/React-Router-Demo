/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import Scrollover from '../Scrollover';
import axios from 'axios';

const Home = () => {
  const [storeToDo, setStoreToDo] = useState([]);
  console.log(`storeToDo`, storeToDo);

  const toDO = () => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((response) => {
      console.log(`response`, response);
      setStoreToDo(response?.data);
    });
  };
  useEffect(() => {
    toDO();
  }, []);
  return (
    <div className='border rounded-lg shadow-md text-center font-bold  mt-10 p-5'>
      <div className='  '>
        <div className='  '>
          {/* <img
            className='rounded-lg shadow-lg h-96'
            src='https://wallpapercave.com/wp/wp4175965.jpg'
            alt='image here'
          ></img> */}
          <Scrollover />
        </div>

        <div className='w-full  overflow-y-auto rounded-lg '>
          <span className='flex '>
            {storeToDo
              .filter((filItems) => filItems.id < 21)
              .map((item) => (
                <div
                  className='border p-3 rounded-lg shadow-md  hover:bg-pink-100 hover:shadow-lg m-3 py-5 w-56'
                  key={item?.id}
                >
                  <div className='flex '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='36'
                      height='36'
                      fill='currentColor'
                      className='bi bi-award  text-blue-800'
                      viewBox='0 0 16 16'
                    >
                      <path d='M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z' />
                      <path d='M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z' />
                    </svg>
                    <p className='font-semibold ml-5'>{item?.title}</p>
                    {/* <p className="">{item?.completed}</p> */}
                  </div>
                </div>
              ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Users = () => {
  const [paramsId, setParamsId] = useState();
  const [storeUserId, setStoreUserId] = useState(0);
  // const [afterChange, setAfterChange] = useState();
  const [loading, setLoading] = useState(false);
  const [checkEmpty, setCheckEmpty] = useState(true);
  const { userId } = useParams();
  console.log('userId :>> ', userId);
  console.log(`paramsId`, paramsId);
  console.log(`storeUserId`, storeUserId);

  const funParams = () => {
    axios.get(`https://reqres.in/api/users/${userId}`).then((response) => {
      setParamsId(response?.data);
      setLoading(false);
    });
  };
  // eslint-disable-next-line no-unused-vars
  function myFunction() {
    setTimeout(function () {
      funParams();
      // axios.get(`https://reqres.in/api/users`).then((responseGet) => {
      //   console.log(`responseAfterDel`, responseGet);
      //   setLoadingFirst(false);
      // });
    }, 3000);
  }
  useEffect(() => {
    setStoreUserId(userId);
    if (userId > 0) {
      myFunction();
      setLoading(true);
      setCheckEmpty(false)
    }

    // if (userId === storeUserId) {
    //   funParams();
    // } else {
    //   setAfterChange(paramsId?.data?.id);
    //   funParams();
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
  return (
    <div className='border rounded-lg shadow-md  mt-10 p-20 bg-blue-100'>
      {checkEmpty ? (<div className=""><p className="">Users List is Empty!<br/>Get Users First!!</p></div>): (<div
        className='mb-5 flex  bg-white rounded-lg shadow-lg p-3'
        key={userId}
      >
        {loading ? (
          <div className='py-10 bg-white  rounded-md p-5 w-full'>
            <div className='animate-pulse flex '>
              <div className='rounded-full bg-blue-400 h-12 w-12 '></div>
              <div className='flex-1 ml-3 '>
                <div className='h-24 bg-blue-400 rounded w-3/4 mb-10'></div>
                <div className=''>
                  <div className='h-10 bg-blue-400 rounded mb-3'></div>
                  <div className='h-8 bg-blue-400 rounded w-5/6 mb-3 '></div>
                  <div className='h-6 bg-blue-400 rounded w-3/4 mb-3'></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex'>
            <div className=''>
              <img
                className='rounded-full shadow-lg'
                src={paramsId?.data?.avatar}
                alt='img here'
              ></img>
            </div>
            <div className='ml-5 my-2'>
              <p className='font-bold text-2xl '>
                First Name-{paramsId?.data?.first_name}
              </p>
              <p className='font-bold text-gray-500'>
                Last Name-{paramsId?.data?.last_name}
              </p>
              <p className='font-bold text-gray-500'>
                Email-{paramsId?.data?.email}
              </p>
              <div className='flex  mt-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='26'
                  height='26'
                  fill='currentColor'
                  className='bi bi-facebook text-blue-700 shadow-md rounded-full'
                  viewBox='0 0 16 16'
                >
                  <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='26'
                  height='26'
                  fill='currentColor'
                  className='bi bi-twitter bg-blue-400 text-white rounded-md ml-5 mr-5 shadow-md'
                  viewBox='-2 -2 20 20'
                >
                  <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='26'
                  height='26'
                  fill='currentColor'
                  className='bi bi-linkedin shadow-md rounded'
                  viewBox='0 0 16 16'
                >
                  <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>)}
      
    </div>
  );
};

export default Users;

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation,
} from 'react-router-dom';

import axios from 'axios';
import moment from 'moment';

const ApiPutDelete = ({
  GetUsers,
  allUsers,
  setAllUsers,
  loadingFirst,
  setLoadingFirst,
  getNotification,
  setGetNotification,
  myFunction,
}) => {
  // const [allUsers, setAllUsers] = useState();
  const [edit, setEdit] = useState([]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [putResponse, setPutResponse] = useState();
  // const [loadingFirst, setLoadingFirst] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  // const [getNotification, setGetNotification] = useState(true);
  const [delState, setDelState] = useState([]);
  const [delAlert, setDelAlert] = useState();
  const [loading, setLoading] = useState({});
  const [routerParameter, setRouterParameter] = useState();
  console.log('routerParameter :>> ', routerParameter);
  // const { pageId } = useParams();
  // console.log('pageId :>> ', pageId);
  console.log('loading :>> ', loading);
  console.log('allUsers :>> ', allUsers);
  console.log('edit :>> ', edit);
  console.log('delState :>> ', delState);
  console.log(`delAlert`, delAlert);
  // const GetUsers = () => {
  //   axios.get(`https://reqres.in/api/users`).then((response) => {
  //     console.log(`GetResponse`, response);
  //     setAllUsers(response.data);
  //     setLoadingFirst(false);
  //     setGetNotification(false);
  //   });
  // };

  const location = useLocation();
  // console.log('location :>> ', location);

  useEffect(() => {
    
    setRouterParameter(location?.pathname);
  }, [location]);

  useEffect(() => {
    setLoadingFirst(true);
    myFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routerParameter]);

  const Update = (id) => {
    const UpdateObj = {};
    UpdateObj.first_name = firstName;
    UpdateObj.last_name = lastName;
    UpdateObj.email = email;
    PutApi(UpdateObj, id);
  };

  const PutApi = (UpdateUsers, id) => {
    // setEdit([edit.id] === true);
    axios
      .put(`https://reqres.in/api/users/${edit}`, { UpdateUsers })
      .then((response) => {
        console.log(`updatedresponse`, response);
        setPutResponse(response?.data);
        setEmail('');
        setFirstName('');
        setLastName('');
        setLoadingUpdate(false);
        // setEdit([edit.id] === false);
      });
  };

  // function myFunction() {
  //   setTimeout(function () {
  //     GetUsers();
  //     // axios.get(`https://reqres.in/api/users`).then((responseGet) => {
  //     //   console.log(`responseAfterDel`, responseGet);
  //     //   setLoadingFirst(false);
  //     // });
  //   }, 3000);
  // }

  // useEffect(() => {
  //   myFunction();
  // }, []);
  const DeleteApi = (uniqueId) => {
    console.log(`uniqueId`, uniqueId);
    setLoading({ [uniqueId]: true });
    setLoadingFirst(true);
    axios.delete(`https://reqres.in/api/users/${uniqueId}`).then((response) => {
      console.log(`deletedResponse`, response);
      setDelAlert(response);
      if (response) {
        myFunction();
      }
      // if (response) {
      //   //
      // }
      setLoading({ [uniqueId]: false });
    });
  };
  useEffect(() => {
    if (delAlert?.status === 204) {
      alert(
        `User ${delState?.map((item) => item?.first_name)} has been deleted`
      );
      // GetUsers();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delAlert]);
  return (
    <div className='m-5'>
      <div className='flex justify-between bg-gray-700 text-white p-8 rounded-lg shadow-lg'>
        <div className=''>
          <p className='font-bold text-5xl hover:text-blue-500'>
            Get Users At your Fingertips
          </p>
        </div>
        <div className='flex p-2'>
          <div className='flex relative mr-10 '>
            <button
              className='border  border-blue-600  focus:outline-none rounded-lg bg-white text-blue-500 font-semibold px-5 hover:bg-blue-500 hover:text-white'
              onClick={() => {
                GetUsers();
                setLoadingFirst(true);
              }}
            >
              Get Users
            </button>
            {getNotification && (
              <span className='flex relative h-3 w-3 -mt-1 -ml-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-3 w-3 bg-blue-500'></span>
              </span>
            )}
          </div>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='36'
            height='36'
            fill='currentColor'
            className='bi bi-geo-alt text-blue-500 mr-5'
            viewBox='0 0 16 16'
          >
            <path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z' />
            <path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='36'
            height='36'
            fill='currentColor'
            className='bi bi-google text-blue-500'
            viewBox='0 0 16 16'
          >
            <path d='M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z' />
          </svg>
        </div>
      </div>
      {/* get users div */}
      <div className='border mt-5 rounded-lg shadow flex bg-blue-100 p-10'>
        {loadingFirst ? (
          <div className='py-10 bg-white border border-blue-300 shadow rounded-md p-5 w-full'>
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
            <div className='animate-pulse flex mt-5 '>
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
            <div className='animate-pulse flex mt-5'>
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
        ) : allUsers?.page > 0 ? (
          <>
            <div className='w-2/4 '>
              {allUsers?.data?.map((item, index) => (
                <div
                  className='mb-5 flex justify-between bg-white rounded-lg shadow-lg p-3'
                  key={item?.id}
                >
                  <div className='flex'>
                    <div className=''>
                      <img
                        className='rounded-full shadow-lg'
                        src={item?.avatar}
                        alt='image here'
                      ></img>
                    </div>
                    <div className='ml-5 my-2'>
                      <p className='font-bold text-2xl '>
                        First Name-{item?.first_name}
                      </p>
                      <p className='font-bold text-gray-500'>
                        Last Name-{item?.last_name}
                      </p>
                      <p className='font-bold text-gray-500'>
                        Email-{item?.email}
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
                  <div className='my-12 '>
                    <Link
                      className='focus:outline-none rounded-full px-5 py-1 bg-blue-600 shadow-md font-bold hover:bg-gray-400 hover:text-white hover:shadow-lg'
                      to={`/Users/${item?.id}`}
                    >
                      View
                    </Link>
                    <button
                      className=' ml-3 focus:outline-none rounded-full px-5 py-1 bg-gray-400 shadow-md font-bold hover:bg-blue-600 hover:text-white hover:shadow-lg '
                      onClick={() => {
                        setEdit(
                          allUsers?.data?.filter(
                            (filEdit) => filEdit.id === item?.id
                          )
                        );
                        setEmail('');
                        setFirstName('');
                        setLastName('');
                      }}
                    >
                      Edit
                    </button>
                    {/* <br/> */}

                    <button
                      className=' ml-3 focus:outline-none rounded-full px-5 py-1 bg-red-600 shadow-md font-bold hover:bg-blue-600 hover:text-white hover:shadow-lg'
                      onClick={() => {
                        DeleteApi(item?.id);
                        // setDelLoading(true);
                        setDelState(
                          allUsers?.data?.filter(
                            (filEdit) => filEdit.id === item?.id
                          )
                        );
                      }}
                    >
                      {loading[item?.id] && ( ///question
                        <svg
                          version='1.1'
                          id='L9'
                          xmlns='http://www.w3.org/2000/svg'
                          style={{ display: 'inline' }}
                          height='2rem'
                          width='40px'
                          viewBox='0 0 100 100'
                          enableBackground='new 0 0 0 0'
                          className='mr-2'
                        >
                          <path
                            fill='black'
                            d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'
                          >
                            <animateTransform
                              attributeName='transform'
                              attributeType='XML'
                              type='rotate'
                              dur='1s'
                              from='0 50 50'
                              to='360 50 50'
                              repeatCount='indefinite'
                            />
                          </path>
                        </svg>
                      )}
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* second div */}

            {allUsers?.page > 0 &&
              (edit?.length > 0 ? (
                <div className='bg-white rounded-lg shadow-lg ml-10 w-2/4 p-10 text-center'>
                  <div className='bg-blue-100 '>
                    <div className='bg-white '>
                      <div className=''>
                        <p className='font-bold '>First Name</p>
                        <input
                          className='border focus:outline-none w-56 h-10 rounded-lg shadow p-2 font-semibold text-gray-400 '
                          placeholder='Enter first name'
                          type='text'
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        ></input>
                      </div>
                      <div className='my-3'>
                        <p className='font-bold'>Last Name</p>
                        <input
                          className='border focus:outline-none w-56 h-10 rounded-lg shadow p-2 font-semibold text-gray-400'
                          placeholder='Enter last name'
                          type='text'
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        ></input>
                      </div>
                      <div className=''>
                        <p className='font-bold'>Email</p>
                        <input
                          className='border focus:outline-none w-56 h-10 rounded-lg shadow p-2 font-semibold text-gray-400'
                          placeholder='Enter email'
                          type='text' ///question
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>
                      </div>
                      <button
                        className=' mb-16 mt-5 focus:outline-none rounded-full px-5 py-1 bg-blue-600 shadow-md font-bold hover:bg-gray-400 hover:text-black hover:shadow-lg w-56 text-white'
                        onClick={() => {
                          Update();
                          setLoadingUpdate(true);
                        }}
                      >
                        {loadingUpdate && (
                          <svg
                            version='1.1'
                            id='L9'
                            xmlns='http://www.w3.org/2000/svg'
                            style={{ display: 'inline' }}
                            height='2rem'
                            width='40px'
                            viewBox='0 0 100 100'
                            enableBackground='new 0 0 0 0'
                            className='mr-2'
                          >
                            <path
                              fill='white'
                              d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'
                            >
                              <animateTransform
                                attributeName='transform'
                                attributeType='XML'
                                type='rotate'
                                dur='1s'
                                from='0 50 50'
                                to='360 50 50'
                                repeatCount='indefinite'
                              />
                            </path>
                          </svg>
                        )}
                        Update
                      </button>
                    </div>
                    <div className='bg-white'>
                      {loadingUpdate ? (
                        <div className='py-10 bg-white border border-blue-300 shadow rounded-md p-5'>
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
                      ) : putResponse ? (
                        <div className='py-10 bg-white border border-blue-300 shadow rounded-md'>
                          <p className='font-bold text-4xl text-blue-500 mb-10'>
                            User Details Updated successfully!!
                          </p>
                          <p className='font-bold text-3xl mb-5'>
                            {putResponse?.UpdateUsers?.first_name}
                          </p>
                          <p className='font-bold text-2xl mb-5'>
                            {putResponse?.UpdateUsers?.last_name}
                          </p>
                          <p className='font-bold text-xl mb-5'>
                            {putResponse?.UpdateUsers?.email}
                          </p>
                          <p className='font-bold'>
                            {moment(putResponse?.updatedAt).format('LLL')}
                          </p>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className='bg-white rounded-lg shadow-lg ml-10 w-2/4 p-10 text-center'>
                  <div className='flex justify-center mt-20'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='66'
                      height='66'
                      fill='currentColor'
                      className='bi bi-file-earmark-diff text-gray-500 '
                      viewBox='0 0 16 16'
                    >
                      <path d='M8 5a.5.5 0 0 1 .5.5V7H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V8H6a.5.5 0 0 1 0-1h1.5V5.5A.5.5 0 0 1 8 5zm-2.5 6.5A.5.5 0 0 1 6 11h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z' />
                      <path d='M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z' />
                    </svg>
                  </div>
                  <p className='font-bold mt-10'>
                    you can edit any user's data by clicking
                    <span className='mx-2'>
                      <button className='text-md focus:outline-none rounded-full px-5 py-1 bg-gray-400 shadow-md font-bold hover:bg-blue-600 hover:text-white hover:shadow-lg '>
                        Edit
                      </button>
                    </span>
                    button in the Users list !!
                  </p>
                </div>
              ))}
          </>
        ) : (
          <div className='bg-white h-96 font-bold text-3xl text-center px-20 m-10 w-full rounded-lg shadow-md py-28'>
            <div className='flex justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='66'
                height='66'
                fill='currentColor'
                className='bi bi-cart-x mb-5 text-blue-300'
                viewBox='0 0 16 16'
              >
                <path d='M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z' />
                <path d='M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z' />
              </svg>
            </div>
            <p className='text-gray-400'>
              Get Users first!! <br />
              List is Empty!!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiPutDelete;

import React, { useState } from 'react';

import axios from 'axios';
// import moment from 'moment';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import Home from './Home';
import Users from './Users';
import ApiPutDelete from '../ApiPutDelete.jsx';

const ReactRouter = () => {
  const [allUsers, setAllUsers] = useState();
  const [loadingFirst, setLoadingFirst] = useState(false);
  const [getNotification, setGetNotification] = useState(true);
  const GetUsers = () => {
    axios.get(`https://reqres.in/api/users`).then((response) => {
      console.log(`GetResponse`, response);
      setAllUsers(response.data);
      setLoadingFirst(false);
      setGetNotification(false);
    });
  };
  function myFunction() {
    setTimeout(function () {
      GetUsers();
      // axios.get(`https://reqres.in/api/users`).then((responseGet) => {
      //   console.log(`responseAfterDel`, responseGet);
      //   setLoadingFirst(false);
      // });
    }, 3000);
  }
  return (
    <Router>
      <div className='m-5'>
        <div className='bg-gray-700 flex justify-between p-8 px-10 rounded-lg shadow-md'>
          <h1 className='text-white font-bold text-4xl '>React Router Demo</h1>
          <nav className=' font-bold text-xl mr-10 mt-2'>
            <ul>
              <Link
                to='/'
                className='text-white mr-5 rounded-full hover:bg-purple-600 px-3 pb-1'
              >
                Home
              </Link>

              <Link
                to='/AboutUs'
                className='text-white mr-5 rounded-full hover:bg-purple-600 px-3 pb-1'
              >
                About
              </Link>

              <Link
                to='/Users'
                className='text-white rounded-full hover:bg-purple-600 px-3 pb-1 mr-5'
              >
                Users
              </Link>
              <Link
                to='/ApiPutDelete/getUsers'
                className='text-white rounded-full hover:bg-purple-600 px-3 pb-1'
                onClick={() => {
                  // GetUsers();
                  setLoadingFirst(true);
                  myFunction();
                }}
              >
                Get Users
              </Link>
            </ul>
          </nav>
        </div>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/AboutUS'>
            <AboutUs />
          </Route>
          <Route path='/Users/:userId'>
            <Users />
          </Route>
          {/* <Route path='/ApiPutDelete'>
            <ApiPutDelete />
          </Route> */}
          <Route
            path='/ApiPutDelete/:getUsers'
            render={(props) => (
              <ApiPutDelete
                {...props}
                GetUsers={GetUsers}
                allUsers={allUsers}
                setAllUsers={setAllUsers}
                loadingFirst={loadingFirst}
                setLoadingFirst={setLoadingFirst}
                getNotification={getNotification}
                setGetNotification={setGetNotification}
                myFunction={myFunction}
              />
            )}
          />
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default ReactRouter;

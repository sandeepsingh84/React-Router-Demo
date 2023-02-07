import React, { useState, useEffect } from 'react';
import AboutUs from './AboutUs';
import { Link, useLocation, useHistory } from 'react-router-dom';

const FeedBack = () => {

  const [getFeedback, setGetFeedback] = useState();
  const [getName, setGetName] = useState();
  const [getEmail, setGetEmail] = useState();
  const [notification, setNotification] = useState(0);
  // console.log(`queryGet`, queryGet)

  function useQuery() {
    return new URLSearchParams(useLocation().search); //URlSearchParams will search the useLocation(current location ) for any updated parameters in the Url.
  }
  console.log(`useLocation()`, useLocation().search);

  const query = useQuery();

  useEffect(() => {
    setGetFeedback(query.get('feedback'));
    setGetName(query.get('name'));
    setGetEmail(query.get('email'));
    // setNotification(false)
  }, [query]);

  const feedBackObj = {};
  feedBackObj.feedback = getFeedback;
  feedBackObj.name = getName;
  feedBackObj.email = getEmail;

  console.log(`feedBackObj`, feedBackObj);

  const history = useHistory();
  const handleClick = () => {
    history.push('/AboutUs');
  };
  // function myFunction() {

  // }

  useEffect(() => {
    setTimeout(() => {
      handleClick();
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notification]);
  return (
    <>
      {getFeedback ? (
        <div className='text-center border rounded-lg shadow mt-10 p-20 flex justify-center h-full'>
          <div className='border rounded-lg shadow-md bg-blue-100 w-2/4 py-10'>
            <p className=' text-xl p-5'>{feedBackObj?.feedback}</p>
            <div className=''>
              <p className='font-semibold text-blue-600'>
                {feedBackObj?.name}
                <br />
                {feedBackObj?.email}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className='text-center border rounded-lg shadow mt-10 p-20 flex justify-center h-full bg-blue-100'>
          <p className='font-bold text-xl'>
            FeedBack list is Empty! <br /> Give Feedback first in About Page!!
          </p>
        </div>
      )}
    </>
  );
};

export default FeedBack;

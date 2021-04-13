import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const [feedback, setFeedback] = useState();
  const [submit, setSubmit] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  // const [arrayFeedback, setArrayFeedback] = useState();
  // const [showNameEmail, setShowNameEmail] = useState(false);

  const objFeedback = {};
  objFeedback.feedback = feedback;
  objFeedback.name = name;
  objFeedback.email = email;
  // setArrayFeedback(objFeedback)
  // console.log(`objFeedback`, objFeedback)

  // console.log(`dataFeedback`, dataFeedback)
  return (
    <div className='text-center border rounded-lg shadow-md mt-10 h-96 '>
      <h1 className='font-bold text-5xl text-blue-700 mb-5'>
        Submit your feedBack
      </h1>
      <div className='flex justify-center mt-10'>
        <div className=''>
          <input
            className='border rounded-lg shadow-md h-40 w-72 text-center focus:outline-none font-bold'
            placeholder='Write feedback here'
            type='text'
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></input>
          <br />
          <button
            className='rounded-lg mt-10 shadow-md font-semibold p-2 px-10 bg-gray-300 ml-5 focus:outline-none hover:bg-blue-600 hover:shadow-lg hover:text-white'
            onClick={() => {
              setSubmit(feedback);
              // setShowNameEmail(true);
            }}
          >
            Next
          </button>
        </div>
        {submit && (
          <div className='ml-20'>
            <div className='mb-5'>
              <p className='font-bold text-md mb-2'>Enter Your Name</p>
              <input
                className='border rounded-lg shadow-md p-2 px-16 focus:outline-none'
                placeholder='Enter your name'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className='mb-10'>
              <p className='font-bold text-md mb-2'>Enter Your email</p>
              <input
                className='border rounded-lg shadow-md p-2 px-16 focus:outline-none m'
                placeholder='Enter your email'
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className=''>
              <Link
                className='rounded-lg shadow-md font-semibold p-2 px-10 bg-gray-300 ml-5 focus:outline-none hover:bg-blue-600 hover:shadow-lg hover:text-white'
                to={`/FeedBack?feedback=${feedback}&name=${name}&email=${email}`}
              >
                Submit
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;

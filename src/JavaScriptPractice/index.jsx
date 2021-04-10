import React, { useState } from 'react';

const JavaScriptPractice = () => {
  const [findDay, setFindDay] = useState();
  console.log('findDay :>> ', findDay);
  const getDates = (today) => {
    switch (today) {
      case 0:
        day = 'Sunday';
        return day;
      case 1:
        day = 'Monday';
        return day;
      case 2:
        day = 'tuesday';
        return day;
      case 3:
        day = 'Wednesday';
        return day;
      case 4:
        day = 'Thursday';
        return day;
      case 5:
        day = 'Friday';
        return day;
      case 6:
        day = 'Saturday';
        return day;
      default:
        day = 'Looking forward to the Weekend';
        return day;
    }
  };
  var day;
  // eslint-disable-next-line default-case
  //

  return (
    <div>
      <p id='demo'></p>

      <div className=''>
        <button
          className
          onClick={() => {
            setFindDay(getDates(new Date().getDay()));
            console.log(`new Date().getDay()`, new Date().getDay());
          }}
        >
          click me
        </button>
      </div>
      <div className=''>
        Today is
        <b className='ml-5'>{findDay}</b>
      </div>
    </div>
  );
};

export default JavaScriptPractice;

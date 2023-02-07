//
import React, { useState,useEffect } from "react";

const ArrayExample = () => {
  const [changeElement, setChangeElement] = useState("Email Address")
  console.log(`changeElement`, changeElement)
  const [switchOn, setSwitchOn] = useState(false)
  console.log(`switchOn`, switchOn)
  const arr = [
    {
      id: "3",
      value1: changeElement,
      value2: "margotfoster@gmail.com",
    },
    {
      id: "4",
      value1: changeElement,
      value2: "$120,000",
    },
    {
      id: "5",
      value1:changeElement,
      value2: (
        <div className="ml-8"> This is infoormation form of Margot Foster</div>
      ),
    },
  ];
  const [changeList, setChangeList] = useState(arr);

  console.log(`changeList`, changeList);
  useEffect(() => {
    if (switchOn === true) {
      setChangeElement('')
    }
  }, [switchOn])

  // const change = () => {
  //   const newArray = [
  //     {
  //       id: "1",
  //       value1: "hello",
  //       value2: "java",
  //     },
  //   ];
  // };

  return (
    <div className="">
      <div className=" flex justify-between w-96  ">
        <div className="">
          <h1 className="font-bold text-center text-3xl">
            Applicant Information
          </h1>
          <h3 className="font-bold text-center">
            Personal Details and application
          </h3>

          {changeList?.map((abc1) => (
            <div className="flex justify-between border-b py-3 space-x-96">
              <p className="font-bold " key={abc1.id}>
                {abc1?.value1}
              </p>
              <p className="font-bold " key={abc1?.id}>
                {abc1?.value2}
              </p>
            </div>
          ))}
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-40 mt-3"
        onClick={() => setSwitchOn(true)}
      >
        Clickme
      </button>
    </div>
  );
};
export default ArrayExample;

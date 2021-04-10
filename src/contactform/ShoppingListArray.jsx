import React from "react";

const ShoppingListArray = ({
  setInput,
  array,
  setArray,
  increment,
  setIncrement,
  quant,
  setQuant,
  setIncFilter,
  incFilter,
}) => {
  // console.log(`incrment`, increment);
  // console.log(`quant`, quant);
  // const IncPlus = () => {
  //   setIncFilter( () => increment?.filter((incfilt) => incfilt.quantity++));
  // };

  return (
    <>
      <div className="bg-purple-300 mt-10 rounded-lg shadow-md h-96 p-10  ">
        <div className=" rounded-lg overflow-y-auto h-80">
          {array?.length > 0 &&
            array?.map((item) => (
              <div
                key={item?.id}
                className=" p-5 mb-2 bg-white rounded-lg shadow flex justify-between hover:ring-2 hover:ring-purple-600 hover:border-transparent  hover:shadow-lg shadow-inner"
              >
                <div className="">
                  <p className="font-bold text-purple-600">
                    {" "}
                    Name: {item?.name}
                  </p>
                  <p className="font-semibold text-gray-400 text-sm">
                    Quantity: {item?.quantity}
                  </p>
                </div>
                <div className="p-1">
                  <button
                    className="font-bold p-2 text-purple-500 focus:outline-none bg-gray-100 rounded-lg shadow hover:bg-purple-300 hover:text-black hover:shadow-lg hover:border-purple-400 hover:border-2"
                    onClick={
                      () => {
                        setIncrement( 
                          // array?.filter((finditem) => finditem?.id === item?.id)
                          item.quantity++
                        );
                        
                        // IncPlus();
                        // setIncrement(increment + 1) }
                        // setQuant(
                        //   increment?.filter(
                        //     (filterquant) => filterquant?.quantity === quant + 1
                        //   )
                        // );
                      }
                      // setQuant(quant ++)
                      // setQuant(increment + 1)
                      // IncPlus();
                    }
                  >
                    Increment
                  </button>
                  <button className="font-bold p-2 text-purple-500 focus:outline-none bg-gray-100 rounded-lg shadow-md ml-5 hover:bg-purple-300 hover:text-black hover:shadow-lg hover:border-purple-400 hover:border-2"
                   onClick={
                    () => {
                      if (increment === 1) {
                         setIncrement(1)
                      } else {
                         setIncrement( 
                        
                          item.quantity--
                        )
                      }
                     }}>
                    Decrement
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default ShoppingListArray;

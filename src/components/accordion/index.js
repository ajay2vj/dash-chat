import React, { useState, useRef } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
function Accordion({
  title,
  data
}) {
  const [toggleBox, setToggleBox] = useState(false);
  const myRef = useRef();

  const policyGroupToggleHandler = (e) => {
    e.preventDefault();
    setToggleBox(!toggleBox);
  };

  return (
      <div
        style={{
          height: `${toggleBox ? '' : '27px'}`
        }}
        className='cardContainer'
      >
        <div
          className="subCard"
          ref={myRef}
          onClick={(e) => {
            policyGroupToggleHandler(e);
          }}
          style={{
            paddingBottom: `${toggleBox ? '5px' : '0px'}`,
          }}
        >
          <div className="w-full flex justify-between">
            <span
              className='ml-7 select-none customCss'
            >{title}</span>
            <div className='flex'>
              <IoIosArrowForward
                className="toggle-arrow mr-4 cursor-pointer"
                style={
                  toggleBox
                    ? {
                        transform: 'rotate(90deg)',
                        transition: 'all 0.1s linear',
                      }
                    : { transform: 'rotate(0)', transition: 'all 0.1s linear' }
                }
                size={18}
              />
            </div>
          </div>
      </div>
      {toggleBox ? (
        <>
          <hr style={{ marginBottom: 7, marginTop: 7 }} />
          <div className='px-2'>
            Hiiii
            {/* {data?.map((item, index) => (
              <div className='flex justify-between' key={index}>
                <span className='text-xs mb-2'>{item?.name}</span>
                <span className='text-xs mb-2'>{item?.count}</span>
              </div>
            ))} */}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Accordion;

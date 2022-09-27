import { Button } from 'antd';
import React, { useState, useRef } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import './accordionstyle.css';
function Accordion({
  title,
  data,
  setPassData,
  setSubtotal,
  setTaxtotal
}) {
  const [toggleBox, setToggleBox] = useState(false);
  const [product, setProduct] = useState([])
  const myRef = useRef();

  const policyGroupToggleHandler = (e) => {
    e.preventDefault();
    setToggleBox(!toggleBox);
  };
  const ProductDetails = (item)=>{
    setProduct(item)
    const data = [...product]
    data?.push(item)
    const flatten = data?.flat()
    setSubtotal(flatten?.map(i=>i?.valuebeforetax)?.reduce((a,b)=>a+b))
    setTaxtotal(flatten?.map(i=>i?.taxValue)?.reduce((a,b)=>a+b))
    setPassData(flatten)
  }

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
                size={22}
              />
            </div>
          </div>
      </div>
      {toggleBox ? (
        <>
          <hr style={{ marginBottom: 7, marginTop: 7 }} />
          <div className='px-2'>
            {data?.map((item, index) => (
              <div key={index}>
                <div className='grid-class py-3 gap-3' key={index}>
                  <img src={item?.fnbs_images?.map((item)=> item?.imageurl)} className='image-subcat' alt="sub product images" />
                  <div>
                    <p className='text-base font-medium mb-2 text-start'>{item?.itemName}</p>
                    <p className='text-xs text-start text-stone-400' style={{position: 'relative', top: '-12px'}}>{item?.itemDetails}</p>
                    <p className='text-base text-start font-medium' style={{paddingTop: '15px'}}>${item?.valuebeforetax}</p>
                  </div>
                  <div className='bottom-class'>
                    <div className='p-2 flex gap-2'>
                      <AiOutlineShoppingCart 
                        size={25}
                        color="#ff4d4f"
                      /> 
                      <Button 
                        danger 
                        type='primary' 
                        style={{display: 'flex', gap: '6px'}}
                        onClick={()=> ProductDetails([item])}
                      >Add 
                        <BiPlus 
                          stroke='#FFF'
                          size={18}
                          className="mt-0.5"
                        />
                      </Button>
                    </div>
                    <p className='font-medium'>To be Picked-up</p>
                  </div>
                </div>
                <hr style={{ marginBottom: 7, marginTop: 7 }} />
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Accordion;

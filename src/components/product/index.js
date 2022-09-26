import React, { useState } from 'react'
import Accordion from '../accordion';
import CartEmpty from '../cart_empty';
import './product.css';
export default function Product({content}){
  const [passData, setPassData] = useState([])
  // console.log(passData)
  return(
    <div className='px-5 product-grid'>
      <div>
        {content?.map((item, index)=>
          <div className="card" key={index}>
            <img src={item?.fnbtabs_images?.map((item)=> item?.imageurl)} alt="5 Terre" width={'100%'} />
            <div className="accordion">
            <Accordion 
              title={item?.tabName}
              data={item?.fnbtabs_items}
              setPassData={setPassData}
            />
            </div>
          </div>
        )}
      </div>
      <div className='order-summary'>
        {passData?.length > 0 ? (
          <div className='p-4'>
            <p className='flex justify-start text-lg'>Order Summary</p>
            <p className='flex justify-start text-base underline'>Picked-up by you</p>
            {passData?.map((item, index)=>
              <div key={index}>
                <div className='flex justify-between'>
                  <span>{item?.itemName}</span>
                  <span>{item?.valuebeforetax}</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <CartEmpty />
        )}
        
      </div>
    </div>
  )
}
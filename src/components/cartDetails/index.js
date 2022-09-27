import React from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
export default function CartDetails({
  passData,
  setCount,
  subTotal,
  taxTotal,
  count
}){
  return(
    <div>
      {passData?.map((item, index)=>
        <div key={index}>
          <div className='grid-cart'>
            <span className='font-medium select-none'>{item?.itemName}</span>
            <div className='flex gap-2'>
              <AiOutlineMinusCircle 
                size={25}
                color="#ff4d4f"
                onClick={(e)=> {e.stopPropagation(); setCount(count - 1)}}
              />
              <span className='select-none'>{count}</span>
              <AiOutlinePlusCircle 
                size={25}
                color="#ff4d4f"
                onClick={(e)=> {e.stopPropagation(); setCount(count + 1)}}
              />
            </div>
            <span className='font-medium select-none'>${item?.valuebeforetax}</span>
          </div>
        </div>
      )}
      <hr />
      <div className='flex justify-between'>
        <p className='font-medium text-base'>Sub Total</p>
        <p className='font-medium text-base'>${subTotal}</p>
      </div>
      <div className='flex justify-between mb-2'>
        <p className='font-medium text-base'>Tax</p>
        <p className='font-medium text-base'>${taxTotal}</p>
      </div>
      <hr />
      <div className='flex justify-between mt-2'>
        <p className='font-medium text-base'>Total</p>
        <p className='font-medium text-base'>${Math.round(subTotal + taxTotal)}</p>
      </div>
    </div>
  )
}
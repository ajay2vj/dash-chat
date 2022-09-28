import React, { useEffect, useState } from 'react'
// import _ from 'lodash'
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiFillCloseCircle } from 'react-icons/ai'
export default function CartDetails({
  passData,
  setCount,
  subTotal,
  taxTotal,
  count
}){
  const [productData, setProductData] = useState(passData)
  const removeItem = (id) => {
    const data = productData?.map((item ,idx)=>({
      id: idx,
      item: item
    }))
    const newPeople = data.filter((person) => person.id !== id);
    setProductData(newPeople?.map((item)=> item?.item));
  }
  useEffect(()=>{
    setProductData(passData)
  },[passData])
  return(
    <div>
      {productData?.map((item, index)=>
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
            <div className='flex gap-1 mt-1.5'>
              <span className='font-medium select-none'>${item?.valuebeforetax}</span>
              <AiFillCloseCircle
                className='cursor-pointer'
                size={18}
                color="#d1cbcb"
                onClick={()=> removeItem(index)}
              />
            </div>
          </div>
        </div>
      )}
      <hr />
      <div className='flex justify-between'>
        <p className='font-medium text-base'>Sub Total</p>
        <p className='font-medium text-base'>${Math.round(subTotal)}</p>
      </div>
      <div className='flex justify-between mb-2'>
        <p className='font-medium text-base'>Tax</p>
        <p className='font-medium text-base'>${Math.round(taxTotal)}</p>
      </div>
      <hr />
      <div className='flex justify-between mt-2'>
        <p className='font-medium text-base'>Total</p>
        <p className='font-medium text-base'>${Math.round(subTotal + taxTotal)}</p>
      </div>
    </div>
  )
}
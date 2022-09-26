import React from 'react'
import { BsCart } from 'react-icons/bs';
export default function CartEmpty(){
  return(
    <div className='p-5'>
      <h1 className='flex justify-center text-xl mb-4'>Your Cart</h1>
        <div className='flex justify-center mb-3'>
          <BsCart 
            size={50}
            color={'#a9a9a9'}
          />
        </div>
      <p className='flex justify-center text-lg' style={{color: '#a9a9a9'}}>Cart is empty Select a category to add food</p>
    </div>
  )
}
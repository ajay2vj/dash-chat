import React, { useState } from 'react'
import Accordion from '../accordion';
import CartEmpty from '../cart_empty';
import './product.css';
import { AiOutlineShoppingCart, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

export default function Product({content}){
  const [passData, setPassData] = useState([])
  const [count, setCount] = useState(0)
  const [subTotal, setSubtotal] = useState([])
  const [taxTotal, setTaxtotal] = useState([])
  // console.log(passData?.filter((item)=> item?.valuebeforetax))
  // console.log(passData?.map(i=>i?.valuebeforetax)?.reduce((a,b)=>a+b))
  // const transFormData = passData?.map((item, index)=>({
  //   id: item?.id,
  //   fnbid: item?.fnbid,
  //   show: item?.show,
  //   cinemaid: item?.cinemaid,
  //   priceincents: item?.priceincents,
  //   strikeprice: item?.strikeprice,
  //   strikeValueBeforeTax: item?.strikeValueBeforeTax,
  //   strikeTaxValue: item?.strikeTaxValue,
  //   amount: item?.amount,
  //   maximumqty: item?.maximumqty,
  //   product_qty: 0,
  //   promoonly: item?.promoonly,
  //   active: item?.active,
  //   order: item?.order,
  //   tax: item?.tax,
  //   taxValue: item?.taxValue,
  //   valuebeforetax: item?.valuebeforetax,
  //   pickupAtCounter: item?.pickupAtCounter,
  //   inSeatDelivery: item?.inSeatDelivery,
  //   fnbs_images: item?.fnbs_images,
  //   itemName: item?.itemName,
  //   itemDetails: item?.itemDetails,
  //   currency: item?.currency,
  //   modifierGroups: item?.modifierGroups,
  //   smartModifiers: item?.smartModifiers,
  //   fnbs_alternateitems: item?.fnbs_alternateitems
  // }))

  // const Increment = (item, index)=>{
  //   console.log(item)
  //   setCount(transFormData?.map((itm)=>
  //     item?.id === itm?.id ? {...item, product_qt: item?.product_qty + 1} : item
  //   ))
  // }
  // const Decrement = (item, index)=>{
  //   setCount(transFormData?.map((itm)=>
  //     item?.id === itm?.id ? {...item, product_qt: item?.product_qty - 1} : item
  //   ))
  // }
  return(
    <div className='px-5 product-grid'>
      <div>
        {content?.map((item, index)=>
          <div className="card" key={index}>
            <img src={item?.fnbtabs_images?.map((item)=> item?.imageurl)} alt="product thumbnail" width={'100%'} />
            <div className="accordion">
            <Accordion 
              title={item?.tabName}
              data={item?.fnbtabs_items}
              setPassData={setPassData}
              setSubtotal={setSubtotal}
              setTaxtotal={setTaxtotal}
            />
            </div>
          </div>
        )}
      </div>
      <div className='order-summary'>
        {passData?.length > 0 ? (
          <div className='p-4'>
            <p className='flex justify-start text-lg font-medium select-none'>Order Summary</p>
            <p className='select-none flex justify-start text-base underline decoration-red-500 font-medium'>
            <AiOutlineShoppingCart 
              size={25}
              color="#ff4d4f"
            /> &nbsp;&nbsp;Picked-up by you
            </p>
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
          </div>
        ) : (
          <CartEmpty />
        )}
        
      </div>
    </div>
  )
}
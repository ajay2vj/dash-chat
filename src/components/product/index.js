import React, { useState } from 'react'
import Accordion from '../accordion';
import CartEmpty from '../cart_empty';
import './product.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import CartDetails from '../cartDetails';

export default function Product({content}){
  const [passData, setPassData] = useState([])
  const [count, setCount] = useState(1)
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
            <CartDetails 
              passData={passData}
              setCount={setCount}
              subTotal={subTotal}
              taxTotal={taxTotal}
              count={count}
            />
          </div>
        ) : (
          <CartEmpty />
        )}
        
      </div>
    </div>
  )
}
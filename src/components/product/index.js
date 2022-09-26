import React from 'react'
import './product.css';
export default function Product({content}){
  const tabName = content?.map((item, index)=> item?.tabName)
  console.log(content)
  return(
    <div>
      Hy this is product  {tabName}
    </div>
  )
}
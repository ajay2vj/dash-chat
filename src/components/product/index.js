import React from 'react'
import Accordion from '../accordion';
import './product.css';
export default function Product({content}){
  const tabName = content?.map((item, index)=> item?.fnbtabs_images?.map((item)=> item?.imageurl))
  console.log(tabName)
  return(
    <div className='px-5'>
      {content?.map((item, index)=>
        <div class="card" key={index}>
          <img src={item?.fnbtabs_images?.map((item)=> item?.imageurl)} alt="5 Terre" width={'100%'} />
          <div class="accordion">
          <Accordion 
            title={item?.tabName}
            // data={item}
          />
          </div>
        </div>
      )}
    </div>
  )
}
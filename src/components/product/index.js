import React from 'react'
import Accordion from '../accordion';
import './product.css';
export default function Product({content}){

  return(
    <div className='px-5'>
      {content?.map((item, index)=>
        <div className="card" key={index}>
          <img src={item?.fnbtabs_images?.map((item)=> item?.imageurl)} alt="5 Terre" width={'100%'} />
          <div className="accordion">
          <Accordion 
            title={item?.tabName}
            data={item?.fnbtabs_items}
          />
          </div>
        </div>
      )}
    </div>
  )
}
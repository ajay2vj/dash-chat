import React, { useState } from 'react'
import Modal from '../modal/index'
import { Button, Checkbox, Form, Input } from 'antd';
import { AiFillCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai'
export default function ModifiresModal({
  setModify,
  modify,
  modifyData,
  setPassData,
  setSubtotal,
  setTaxtotal,
}){
  const [product, setProduct] = useState([])
  const AddToCart = (item)=>{
    setProduct(item)
    setModify(false);
    const data = [...product]
    data?.push(item)
    const flatten = data?.flat()
    setSubtotal(flatten?.map(i=>i?.valuebeforetax)?.reduce((a,b)=>a+b))
    setTaxtotal(flatten?.map(i=>i?.taxValue)?.reduce((a,b)=>a+b))
    setPassData(flatten)
  }
  return(
    <Modal
      setShowModal={setModify}
      showModal={modify}
      className="md:w-4/12"
    >
      <div className="p-4 h-screen overflow-y-auto">
        <div className="header flex items-center justify-end">
          <AiFillCloseCircle
            size={20}
            className='cursor-pointer'
            onClick={()=> setModify(false)}
          />
        </div>
        {modifyData?.map((item, index)=>
          <div>
            <div className='flex justify-center mb-2'>
              <img src={item?.fnbs_images?.map((data)=> data?.imageurl)} alt='modify_mage' width='70%' />
            </div>
            <div className='flex justify-between mb-1'>
              <span className='text-base font-medium text-start'>{item?.itemName}</span>
              <p className='text-base text-start font-medium'>${item?.valuebeforetax}</p>
            </div>
            <p className='text-xs text-start font-medium' style={{position: 'relative', top: '-20px'}}>{item?.fnbs_images?.map((data)=> data?.description)}</p>
            <hr />
            <p className='text-base font-medium text-start'>Extras(optional)</p>
            <div className='flex justify-between'>
              <div>
                <span className='text-base font-medium text-start'>Serving Salsa</span>
                <p className='text-xs text-start font-medium' style={{position: 'relative', top: '0px'}}>+$0.47</p>
              </div>
              <AiOutlinePlusCircle 
                size={25}
                color="#ff4d4f"
              />
            </div>
            <div className='flex justify-between'>
              <div>
                <span className='text-base font-medium text-start'>Jalapenos</span>
                <p className='text-xs text-start font-medium' style={{position: 'relative', top: '0px'}}>+$0.71</p>
              </div>
              <AiOutlinePlusCircle 
                size={25}
                color="#ff4d4f"
              />
            </div>
            <div className='flex justify-between'>
              <div>
                <span className='text-base font-medium text-start'>Add Guacamole</span>
                <p className='text-xs text-start font-medium' style={{position: 'relative', top: '0px'}}>+$1.89</p>
              </div>
              <AiOutlinePlusCircle 
                size={25}
                color="#ff4d4f"
              />
            </div>
            <hr />
            <p className='text-base font-medium text-start'>Meat Upgrades(optional)</p>
            <div className='flex justify-between'>
              <div>
                <span className='text-base font-medium text-start'>Carne Asada</span>
                <p className='text-xs text-start font-medium' style={{position: 'relative', top: '0px'}}>+$0.47</p>
              </div>
              <AiOutlinePlusCircle 
                size={25}
                color="#ff4d4f"
              />
            </div>
            <div className='flex justify-between'>
              <div>
                <span className='text-base font-medium text-start'>Bacon</span>
                <p className='text-xs text-start font-medium' style={{position: 'relative', top: '0px'}}>+$0.71</p>
              </div>
              <AiOutlinePlusCircle 
                size={25}
                color="#ff4d4f"
              />
            </div>
            <div className='flex justify-between'>
              <div>
                <span className='text-base font-medium text-start'>Chiken</span>
                <p className='text-xs text-start font-medium' style={{position: 'relative', top: '0px'}}>+$1.89</p>
              </div>
              <AiOutlinePlusCircle 
                size={25}
                color="#ff4d4f"
              />
            </div>
            <hr />
            <div className='grid grid-cols-2 mt-2'>
              <div className='grid'>
                <span className='text-base font-medium text-start'>optional</span>
                <span className='text-xs font-medium invisible'>optional</span>
                <span className='text-xs font-medium text-start'>Pico De Gallo</span>
                <span className='text-xs font-medium text-start'>Jalapenos</span>
                <span className='text-xs font-medium text-start'>Sour Cream</span>
                <span className='text-xs font-medium text-start'>Jalapenos</span>
              </div>
              <div className='flex gap-3'>
                <div className='grid'>
                  <p className='text-xs font-medium'>Remove</p>
                  <Checkbox  className='invisible'/>
                  <Checkbox />
                  <Checkbox />
                  <Checkbox />
                  <Checkbox />
                </div>
                <div className='grid'>
                  <p className='text-xs font-medium'>Add as Side</p>
                  <Checkbox  className='invisible'/>
                  <Checkbox />
                  <Checkbox />
                  <Checkbox />
                  <Checkbox />
                </div>
              </div>
            </div>
            <div>
              <p className='text-base font-medium text-start'>Special Instruction</p>
              <Form.Item>
                <Input.TextArea />
              </Form.Item>
            </div>
            <div>
              <Button 
                type="primary" 
                danger 
                block
                onClick={()=> {
                  AddToCart([item])
                }}
              >
                Add to Cart ${item?.valuebeforetax}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  )
}
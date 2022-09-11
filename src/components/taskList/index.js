import React, { useState } from "react";
import classes from '../../App.module.css'
import { FiDatabase } from 'react-icons/fi'
import Task from "../task";
import { taskData } from "../../mock";
import { Button, Popconfirm } from "antd";
import { Draggable } from "react-drag-reorder";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function TaskList(){
  const [dragg, setDragg] = useState(false)
  const getOnchange = (curr, newProp)=>{
    // setDragg(newProp ? true: false)
  }
  const onCancel = ()=>{
    setDragg(false)
  }
  const handleOk =()=>{
    toast.success('You have clicked save!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setDragg(false)
  }
  return(
    <div className={`col-md-6`}>
      <ToastContainer />
      <div className={`mb-3 ${classes.column_chat}`}>
        <div className='p-3 flex gap-2'>
          <FiDatabase
            size={25}
            color="#61dafb"
          />
          <span className='text-lg'>
            Task List
          </span>
        </div>
        <hr className='mb-1'/>
        <Draggable onPosChange={(e)=>{
          setDragg(e === 0 || e ? true: false)
          getOnchange(e)}}
        >
          {taskData?.map((item, index)=>(
            <div key={index}>
              <Task 
                profile={item?.image}
                tagContent={item?.tag}
                headContent={item?.headText}
                subContent={item?.subtext}
                borderColor={item?.borderLeft}
              />
              <hr />
            </div>
          ))}
        </Draggable>
        {dragg ? 
          <div className="flex justify-end gap-2 p-3">
            <Button onClick={onCancel}>Cancel</Button>
            <Popconfirm 
              title="Are you sure？" 
              okText="Yes" 
              cancelText="No" 
              onConfirm={handleOk}
            >
              <Button type="primary">Save</Button>
            </Popconfirm>
          </div>
        : null}
        
      </div>
    </div>
  )
}
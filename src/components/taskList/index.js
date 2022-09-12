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
  const [characters, updateCharacters] = useState(taskData)
  const [update, setUpdate] = useState()
  const getOnchange = (currPo, newProp)=>{
    // setDragg(newProp ? true: false)
    if (!currPo) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(currPo, 1);
    items.splice(newProp, 0, reorderedItem);
    setUpdate(items);
  }
  const onCancel = ()=>{
    setDragg(false)
  }
  const handleOk =()=>{
    console.log(update)
    updateCharacters(update)
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
        <div className={`p-3 flex gap-2 ${classes.parent_box}`}>
          <div className={classes.chat_box}>
            <FiDatabase
              size={25}
              color="#61dafb"
            />
          </div>
          <span className={`text-lg`}>
            Task List
          </span>
        </div>
        <hr className='mb-1'/>
        <Draggable onPosChange={(e)=>{
          setDragg(e === 0 || e ? true: false)
          getOnchange(e)
        }}
        >
          {characters?.map((item, index)=>(
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
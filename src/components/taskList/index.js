import React from "react";
import classes from '../../App.module.css'
import { FiDatabase } from 'react-icons/fi'
import Task from "../task";
import { taskData } from "../../mock";
import { Button } from "antd";
import { Draggable } from "react-drag-reorder";
export default function TaskList(){
  const getOnchange = (curr, newProp)=>{
    // console.log(curr, 'curr')
    // console.log(newProp, 'newProp')
  }
  return(
    <div className={`col-md-6`}>
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
        <Draggable onPosChange={getOnchange}>
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
        <div className="flex justify-end gap-2 p-3">
          <Button>Cancel</Button>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </div>
  )
}
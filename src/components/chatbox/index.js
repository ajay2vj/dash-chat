import React from "react";
import classes from '../../App.module.css'
import { HiOutlinePrinter } from 'react-icons/hi';
import { Button } from "antd";
import BadgeModal from "../badge";
export default function ChatBox(){
  return(
    <div className={`col-md-6`}>
      <div className={`mb-3 ${classes.column_chat}`}>
        <div className='p-3 flex gap-2'>
          <HiOutlinePrinter
            size={25}
            color="#f53b76"
          />
          <span className='text-lg'>
            Chat Box
          </span>
        </div>
        <hr className='mb-1'/>
        <BadgeModal />
        <div className="flex justify-end gap-2 p-3">
          <Button>Cancel</Button>
          <Button type="primary">Save</Button>
        </div>
      </div>
    </div>
  )
}
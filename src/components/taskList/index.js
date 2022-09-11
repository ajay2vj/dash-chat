import React from "react";
import classes from '../../App.module.css'
import { FiDatabase } from 'react-icons/fi'
export default function TaskList(){
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
      </div>
    </div>
  )
}
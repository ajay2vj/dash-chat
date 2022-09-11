import React, { useState } from "react";
import classes from '../../App.module.css'
import { HiOutlinePrinter } from 'react-icons/hi';
import { Button, Input } from "antd";
import BadgeModal from "../badge";
export default function ChatBox(){
  const [shows, setShows] = useState([])
  const [message, setMessage] = useState("")
  
  const handleClick = () => {
    setShows(searches => [...searches, message])
  }
  const updateMessage = ({ target }) => {
    setMessage(target.value)
  }
  const keyPressed = ({ key }) => {
    if (key === "Enter") {
      handleClick()
    }
  }
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
        <div className="p-3">
          <div className="flex mb-3">
            <BadgeModal />
            <div className="inline-grid">
              <div className={`mb-2 ${classes.message_left}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <div className={`${classes.message_left}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="inline-grid">
              <div className={`mb-2 ${classes.message_right}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              {shows?.length > 0 ? 
                <div>
                  {shows?.map((item, index)=>(
                    <div className={`mb-2 ${classes.message_right}`} key={index}>
                      {item}
                    </div>
                  ))}
                </div>  
              : null}
              
            </div>
            <BadgeModal />
          </div>
        </div>
        <div className="flex gap-2 p-3">
          <Input 
            placeholder="Enter a message" 
            onChange={updateMessage}
            onKeyPress={keyPressed}
          />
          <Button 
            type="primary"
            onClick={handleClick}
          >Save</Button>
        </div>
      </div>
    </div>
  )
}
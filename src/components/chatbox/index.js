import React, { useState } from "react";
import classes from '../../App.module.css'
import { HiOutlinePrinter } from 'react-icons/hi';
import { Button, Input } from "antd";
import BadgeModal from "../badge";
import { FaCalendarAlt } from 'react-icons/fa';
import moment from "moment";
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
      <div className={`mb-3 ${classes.column_chat}`} style={{height: '430px'}}>
        <div className={`p-3 flex gap-2 ${classes.parent_box}`}>
          <div className={classes.chat_box}>
            <HiOutlinePrinter
              size={25}
              color="#f53b76"
            />
          </div>
          <span className={`text-lg`}>
            Chat Box
          </span>
        </div>
        <hr className='mb-1'/>
        <div className={`p-3 ${classes.overflow_chat}`}>
          <div className="flex">
            <BadgeModal />
            <div className="inline-grid">
              <div className={`mb-2 ${classes.message_left}`}>
                Are we meeting today?
              </div>
              <span className="flex gap-1 mb-2" style={{fontSize: '10px', marginLeft: '27px'}}>
                <FaCalendarAlt size={10} fill="#c8cccc" className="mt-0.5"/> 11:00 AM
              </span>
              <div className={`mb-2 ${classes.message_left}`}>
                If it is when will you join?
              </div>
              <span className="flex gap-1 mb-2" style={{fontSize: '10px', marginLeft: '27px'}}>
                <FaCalendarAlt size={10} fill="#c8cccc" className="mt-0.5"/> 11:00 AM
              </span>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="inline-grid">
              <div className={`mb-2 ${classes.message_right}`}>
                I was thinking after lunch, I have a meeting in the morning
              </div>
              <span className="flex justify-end gap-1 mb-2" style={{fontSize: '10px', marginRight: '27px'}}>
                <FaCalendarAlt size={10} fill="#c8cccc" className="mt-0.5"/> 11:00 AM
              </span>
              {shows?.length > 0 ? 
                <div>
                  {shows?.map((item, index)=>(
                    <div>
                      <div className={`mb-2 ${classes.message_right}`} key={index}>
                        {item}
                      </div>
                      <span className="flex justify-end gap-1 mb-2" style={{fontSize: '10px', marginRight: '27px'}}>
                        <FaCalendarAlt size={10} fill="#c8cccc" className="mt-0.5"/>{moment().format('h:mm A')}
                      </span>
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
          <div className={classes.chat_box}>
            <Button 
              type="primary"
              onClick={handleClick}
            >Save</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
import React, {useState} from "react";
import { Badge } from 'antd';
import './style.css'
export default function BadgeModal(){
  const [show,] = useState(true);
  return(
    <Badge dot={show}>
      <img 
        src="https://www.w3schools.com/w3css/img_avatar3.png" 
        width="50px"
        className={`img_badge`}
        alt="badge"
      />
    </Badge>
  )
}
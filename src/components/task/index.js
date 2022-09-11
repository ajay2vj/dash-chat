import React from "react";
import classes from './style.module.css'
import { Checkbox, Tag } from 'antd';

export default function Task({
  profile,
  tagContent,
  borderColor,
  headContent,
  subContent
}){
  const onChange = (e) => {
    // console.log(`checked = ${e.target.checked}`);
  };
  const tagColorChange = (color)=>{
    if(color === 'Rejected'){
      return '#e0044e';
    }else if(color === 'Latest task'){
      return '#06c941'
    }else if(color === 'Planned'){
      return '#04adb0'
    }else{
      return '#000'
    }
  }
  return(
    <div className="flex gap-2 pb-2">
      <div className={classes.vertical_line} style={{borderLeft: `4px solid ${borderColor}`}}></div>
      <div className="mt-3">
        <Checkbox onChange={onChange} />
      </div>
      {profile ? <img src={profile} alt="imageIcon" className={classes.img_icon}/> : null}
      <div className={`inline-grid mt-1 ${classes.alignContent}`}>
        <span className='text-base font-medium'>{headContent}</span>
        <span className={`text-xs ${classes.sub_content}`}>{subContent}</span>
      </div>
      {tagContent ? 
        <div className={`mt-2.5 ${tagContent === 'Latest task' ? classes.tag_responsive : null}`}>
          <Tag color={tagColorChange(tagContent)} style={{borderRadius: '5px'}}>{tagContent}</Tag>
        </div>
      : null
      }
    </div>
  )
}
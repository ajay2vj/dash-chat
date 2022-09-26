import React, {useState} from 'react'
import { Tabs } from 'antd';
import Product from '../product';
import mockData from '../../mock/data.json'
import './style.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function TabComponent(){
  const [tabData, setTab] = useState('Categories');
  const { TabPane } = Tabs;
  const filteredCategory = mockData?.filter((item, index)=> item?.tabName === tabData)
  const AllCategory = mockData?.map((item, index)=> item)
  const onchangeTab = (key)=> {
    setTab(key)
  }
  const categories = [
    {id: 1, name: 'Categories'},
    {id: 2, name: 'Popcorn'},
    {id: 3, name: 'Drinks'},
    {id: 4, name: 'Snacks/Candy'},
    {id: 5, name: 'Desserts'},
    {id: 6, name: 'Appetizers'},
    {id: 7, name: 'Entrees'},
    {id: 8, name: 'Beer/Wine'},
    {id: 9, name: 'Cocktails'},
  ]
  return(
    <div className=''>
      <IoIosArrowBack 
        className='backicon'
        size={18}
      />
        <Tabs type="card" onChange={onchangeTab}>
          {categories?.map((item, index)=>
            <TabPane tab={item?.name} key={item?.name}>
              <Product content={tabData === 'Categories' ? AllCategory : filteredCategory}/>
            </TabPane>
          )}
        </Tabs>
      <IoIosArrowForward 
        size={18}
        className='righticon'
      />
    </div>
  )
}
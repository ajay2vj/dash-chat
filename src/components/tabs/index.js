import React, {useState} from 'react'
import { Tabs } from 'antd';
import Product from '../product';
import mockData from '../../mock/data.json'
import './style.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function TabComponent(){
  const [tabData, setTab] = useState('Popcorn');
  const { TabPane } = Tabs;
  const filteredCategory = mockData?.filter((item, index)=> item?.tabName === tabData)
  const onchangeTab = (key)=> {
    setTab(key)
  }
  return(
    <div className=''>
      <IoIosArrowBack 
        className='backicon'
        size={18}
      />
        <Tabs type="card" onChange={onchangeTab}>
          <TabPane tab="Popcorn" key="Popcorn">
            <Product content={filteredCategory}/>
          </TabPane>
          <TabPane tab="Drinks" key="Drinks">
            <Product content={filteredCategory}/>
          </TabPane>
          <TabPane tab="Snacks/Candy" key="Snacks/Candy">
            <Product content={filteredCategory}/>
          </TabPane>
          <TabPane tab="Desserts" key="Desserts">
            <Product content={filteredCategory}/>
          </TabPane>
          <TabPane tab="Appetizers" key="Appetizers">
            <Product content={filteredCategory}/>
          </TabPane>
          <TabPane tab="Entrees" key="Entrees">
            <Product content={filteredCategory}/>
          </TabPane>
          <TabPane tab="Beer/Wine" key="Beer/Wine">
            <Product content={filteredCategory}/>
          </TabPane>
          <TabPane tab="Cocktails" key="Cocktails">
            <Product content={filteredCategory}/>
          </TabPane>
        </Tabs>
      <IoIosArrowForward 
        size={18}
        className='righticon'
      />
    </div>
  )
}
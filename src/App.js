import Navbar from './components/navbar';
import classes from './App.module.css';
import { Button } from 'antd';
import { TbPlaneDeparture } from 'react-icons/tb'
import { AiOutlineStar } from 'react-icons/ai'
import { HiPlusSm } from 'react-icons/hi'

function App() {
  return (
    <div>
      <Navbar />
      <div className={classes.parentPadding}>
        <div className={classes.background_Color}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10'>
                <div className='flex'>
                  <div className={classes.icon}>
                    <TbPlaneDeparture 
                      size={25}
                      color="#61dafb"
                    />
                  </div>
                  <div className={`pb-3 inline-grid ${classes.mobile_res}`}>
                    <span className='text-lg font-medium'>Analytics Dashboard</span>
                    <span>Dashboard is an online report where your website data from ecommerce to web anayltics is displayed.</span>
                  </div>
                </div>
              </div>
              <div className='col-md-2'>
                <div className='flex gap-3 justify-center'>
                  <Button 
                    type='primary'
                    style={{background: '#000', border: '#000'}}
                  >
                    <AiOutlineStar 
                      size={22}
                    />
                  </Button>
                  <Button 
                    type='primary'
                    style={{display: 'flex', background: '#3fb056', border: '#3fb056'}}
                  >
                    <HiPlusSm 
                      size={18}
                      fill="#fff"
                      className='mt-0.5 mr-1'
                    /> Create New
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.task_chat}>
          <div className='container'>
            <div className='row'>
              <div className={`col-md-6`}>
                <div className={`p-3 mb-3 ${classes.column_chat}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              </div>
              <div className={`col-md-6`}>
                <div className={`p-3 ${classes.column_chat}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import Navbar from './components/navbar';
import classes from './App.module.css';
import { Button } from 'antd';

function App() {
  return (
    <div>
      <Navbar />
      <div className={classes.parentPadding}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10'>
              <div>
                <h3>Analytics Dashboard</h3>
                <span>Dashboard is an online report where your website data from ecommerce to web anayltics is displayed.</span>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='flex gap-3 justify-center'>
                <Button 
                  type='primary'
                >Star</Button>
                <Button 
                  type='primary'
                >Create New</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

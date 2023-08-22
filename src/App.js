import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex">
      <div className='basis-[12%] h-[100vh] border'>
          <Sidebar/>
      </div> 
      <div className='basis-[88%] border'>
        <DashboardView />
        <div>
          <Outlet></Outlet>
        </div>
      </div> 
    </div>
  );
}

export default App;

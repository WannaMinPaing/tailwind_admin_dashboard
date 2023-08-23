import React from 'react';
import {FaEllipsisH, FaEllipsisV, FaRegCalendarMinus} from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PieComponent from './PieComponent';
import { Progress } from 'antd';
import finder from "../assets/finder.svg";
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];


const Main = () => {
  return (
    <div className='pt-[25px] px-[25px] bg-[#F8F9FC]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer'>Dashboard</h1>
        <button className='bg-[#2E59D9] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer'>Generate Report</button>
      </div>

      <div className="grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]" >

        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'> 
          <div>
            <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNING (MONTHLY)</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="" />
        </div>

        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'> 
          <div>
            <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>PENDING REQUEST</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$240,000</h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="" />
        </div>

        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'> 
          <div>
            <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>TASKS</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="" />
        </div>

        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'> 
          <div>
            <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNING (MONTHLY)</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="" />
        </div>
      </div>

      <div className='flex mt-[22px] w-full gap-[30px]'>
        <div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
          <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
            <h2>Earning Overview</h2>
            <FaEllipsisV color="gray" className='cursor-pointer' /> 
          </div>
          <div>
            <LineChart
              width={850}
              height={350}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
        <div className='basis-[30%] bg-white shadow-md cursor-pointer rounded-[4px]'> 
              <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[EDEDED] '>
                <h2>Revenue Resources</h2>
                <FaEllipsisV color='gray' className='cursor-pointer' />
              </div>
              <div className='pl-[35px]'>
                <PieComponent />  
              </div>
        </div>
      </div>
      <div className='flex mt-[22px] w-full gap-[30px]'>
              <div className='basis-[55%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                  <h2 className='text-[#4e73df] text-[16px] leading-[15px] font-bold'>Project Overview</h2>
                  <FaEllipsisV color="gray" className='cursor-pointer'/>
                </div>
                <div className='px-[25px] space-y-[15px] py-[15px]'>
                  <div>
                    <h2>Server Migration</h2>
                    <Progress percent={30} strokeColor="#E74A3B" />
                  </div>
                  <div>
                    <h2>Sales Tracking</h2>
                    <Progress percent={50} status='active' strokeColor="#F6C23E" />
                  </div>
                  <div>
                    <h2>Customer Database</h2>
                    <Progress percent={100} status='active' strokeColor="#4E73DF" />
                  </div>
                  <div>
                    <h2>Account Setup</h2>
                    <Progress percent={50} status='exception' strokeColor="#1CC88A" />
                  </div>
                </div>
              </div>

              <div className='basis-[45%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] '>
                  <h2 className='text-[#4e73df] text-[16px] leading-[15px] font-bold'>Resources</h2>
                  <FaEllipsisV color='gray' className='cursor-pointer' />
                </div>
                <div  className='pl-[35px] flex items-center justify-center h-[100%]'>
                  <div>
                    <img src={finder} alt="" className='h-[150px] w-[250px] '/>
                    <p className='mt-[15px] font-semibold text-gray-500 flex items-center justify-center '>No data available </p>
                  </div>
                </div>
              </div>
      </div>
    </div>
  )
}

export default Main;
import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
function CustomToast({data,closeToast}) {
  return (
    <div className='w-full mx-auto h-full  bg-transparent  text-[#212121]  rounded-2xl flex px-4 justify-between items-center '>
 
      <p className='text-[1rem] text-[#212121] font-medium font-poppins'>{data.title}</p> <span onClick={closeToast} className=' cursor-pointer hover:text-white text-2xl text-[#212121] font-medium '><IoCloseOutline /></span>      
    </div>
  )
}

export default CustomToast
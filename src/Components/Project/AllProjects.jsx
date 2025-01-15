import React, { useState } from 'react'
import { HoverableIcon } from '../Contact/hoverAbleIcon'
import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router";
import { ProjectCard } from './projectCard';
import ScrollToTop from '../scroll/scroll';
 import Info from "./projectsInfo.json";

function AllProjects() {

  const [data,setData]=useState([]);
  const [input,setInput]=useState("");

        function singleData(data){
                   if(!input) return data
            return  data.title.toLowerCase().includes(input);  
        }
 
         const filteredData=Info.filter((data)=>singleData(data));

  return (
    <>
    
    <div className='w-full h-screen'>
    <div className='bg-[#f56539] relative w-full h-40 sm:h-52 flex justify-center items-center'>

      <p className='font-poppins text-[3rem] sm:text-[4rem] font-bold '>Projects</p>
     <NavLink to="/" className="absolute top-6 left-6" ><HoverableIcon
      icon={<AiOutlineHome className='hover:text-[#eaeaea]' />}
       iconColor='text-[#212121]' hoverBgColor='bg-[#f56539]'
       className='shadow-custom text-3xl'
        /></NavLink> 
      
    </div>

    <div className='w-[95%] mx-auto mt-12  h-full'>
   <div className='flex w-full justify-center'><input type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Search projects... ' className=' w-[300px] sm:w-[500px] h-11 rounded-3xl font-medium font-poppins pl-5 bg-[#212121] text-[#eaeaea]  shadow-customInput outline-none' /></div>
    <div className='w-full flex gap-16 flex-wrap justify-center mt-16'>
  {
    filteredData.map((project)=>   <ProjectCard title={project.title} link={project.link}  img={project.img} beforeContent={project.beforeContent} afterContent={project.afterContent} />)
  }


    </div>

    </div>

    </div>
    <ScrollToTop />

</>



  )
}

export default AllProjects
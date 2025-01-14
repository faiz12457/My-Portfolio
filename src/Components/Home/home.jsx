import { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { SideBar } from "../SideBar/sideBar";


export const Home=({isTrue,setIsTrue,contactRef,handleRef})=>{
   

    return (
        <>
            <div className=" flex flex-col  box-border sm:flex-row">
            <div className=" h-48 sm:w-[35%] bg-[#f56539] sm:h-[100vh]  flex items-center justify-center">
             <div className=" pt-3 w-[90%] text-3xl mx-auto  h-[90%] sm:w-[300px] sm:text-center lg:text-start flex flex-col">
                <p className="font-bestermind text-4xl  sm:text-4xl md:text-5xl font-semibold mt-3">Faiz Rizvi </p>
                <span onClick={()=>setIsTrue(true)} className="sm:hidden hover:text-[#212121] absolute cursor-pointer top-9 right-14 text-[#eaeaea] text-3xl"><FaBars /></span>
                <div className="hidden sm:flex grow sm:items-end  sm:justify-center lg:justify-start sm:text-[#212121] sm:mb-4 sm:gap-8">
                <span className="md:text-4xl sm:text-3xl cursor-pointer hover:scale-125 active:scale-100 transition-transform duration-500 ease-in-out"><BsLinkedin /></span>
                <span className="md:text-4xl sm:text-3xl cursor-pointer hover:scale-125 active:scale-100 transition-transform duration-500 ease-in-out"><FaGithub /></span>
                <span className="md:text-4xl sm:text-3xl cursor-pointer hover:scale-125 active:scale-100 transition-transform duration-500 ease-in-out"><FaFacebook /></span>
                </div>
             </div>
            </div>
            <div className="w-full h-96 flex items-end  justify-center sm:items-center relative  sm:w-[65%]  bg-[#212121] sm:h-[100vh]  ">
                <div className="sm:w-[396px] w-[90%] pt-3 box-border flex justify-center items-center flex-col sm:block    sm:ml-36">
                <p className="text-[#eaeaea]  font-poppins sm:text-xl lg:text-2xl opacity-80 sm:mb-2">Web Developer</p>

                <p className="font-poppins text-4xl mb-3  text-[#eaeaea] font-semibold sm:text-4xl md:text-5xl lg:text-6xl sm:mb-7">M Faiz Rizvi</p>

                <p className="font-poppins font-normal sm:text-[1rem] text-center sm:text-start lg:text-[1.1rem] text-[#eaeaea] opacity-70 sm:font-semibold ">
                A confident, passionate, determined, and self-taught individual, seeking various opportunities to explore and research in the area of computer science.
                </p>
                <div className="text-[#f56539] justify-center sm:justify-start font-semibold font-poppins md:gap-6 flex gap-10 mt-5 w-full">
                    <button className="hover:text-[#212121] hover:bg-[#eaeaea] border-[#f56539] w-[150px] h-12 border-2 rounded-3xl">Download CV</button>
                    <button onClick={()=>handleRef(contactRef)} className="hidden sm:hidden md:inline hover:text-[#eaeaea] text-[#212121]  hover:bg-[#212121] bg-[#f56539] border-[#f56539] w-[150px] h-12 border-2 rounded-3xl">Contact</button>
                </div>
                </div>
                <span onClick={()=>setIsTrue(true)} className="hidden sm:inline hover:text-[#f56539] absolute cursor-pointer top-9 right-14 text-[#eaeaea] text-4xl"><FaBars /></span>

                <div className={`w-52 h-52 -top-28 border-[5px] sm:border-none absolute  sm:-left-44 sm:top-36 sm:w-80  sm:h-80 lg:w-[400px] lg:h-[400px] flex justify-center items-center  rounded-full lg:absolute lg:left-[-210px] lg:top-24 transition-opacity ease-in-out duration-300 bg-[#212121] z-20 ${isTrue?"opacity-0":"opacity-100"}`}>
                    <img src="avatarImg.png" className=" w-28  sm:w-52 sm:h-auto lg:w-[260px] h-auto object-cover" />
                </div>



            </div>
            
        
        </div>
    
        </>
    )
}
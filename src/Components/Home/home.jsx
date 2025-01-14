import { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { SideBar } from "../SideBar/sideBar";


export const Home=({isTrue,setIsTrue,contactRef,handleRef})=>{
   

    return (
        <>
            <div className="flex box-border">
            <div className=" w-[35%] bg-[#f56539] h-[100vh] flex items-center">
             <div className="h-[90%] w-[300px]  ml-14  flex flex-col">
                <p className="font-bestermind text-5xl font-semibold mt-3">Faiz Rizvi </p>

                <div className=" flex grow items-end text-[#212121] mb-4 gap-8">
                <span className="text-4xl cursor-pointer hover:scale-125 active:scale-100 transition-transform duration-500 ease-in-out"><BsLinkedin /></span>
                <span className="text-4xl cursor-pointer hover:scale-125 active:scale-100 transition-transform duration-500 ease-in-out"><FaGithub /></span>
                <span className="text-4xl cursor-pointer hover:scale-125 active:scale-100 transition-transform duration-500 ease-in-out"><FaFacebook /></span>
                </div>
             </div>
            </div>
            <div className=" w-[65%] bg-[#212121] h-[100vh] flex justify-center relative items-center ">
                <div className="w-[396px]  ml-[150px]">
                <p className="text-[#eaeaea] font-poppins text-2xl opacity-80 mb-2">Web Developer</p>

                <p className="font-poppins text-[#eaeaea] font-semibold text-6xl mb-7">M Faiz Rizvi</p>

                <p className="font-poppins text-[1.1rem] text-[#eaeaea] opacity-70 font-semibold ">
                A confident, passionate, determined, and self-taught individual, seeking various opportunities to explore and research in the area of computer science.
                </p>
                <div className="text-[#f56539] font-semibold font-poppins flex gap-10 mt-5 w-full">
                    <button className="hover:text-[#212121] hover:bg-[#eaeaea] border-[#f56539] w-[150px] h-12 border-2 rounded-3xl">Download CV</button>
                    <button onClick={()=>handleRef(contactRef)} className="hover:text-[#eaeaea] text-[#212121]  hover:bg-[#212121] bg-[#f56539] border-[#f56539] w-[150px] h-12 border-2 rounded-3xl">Contact</button>
                </div>
                </div>
                <span onClick={()=>setIsTrue(true)} className=" hover:text-[#f56539] absolute cursor-pointer top-9 right-14 text-[#eaeaea] text-4xl"><FaBars /></span>

                <div className={`w-[400px] h-[400px] flex justify-center items-center  rounded-full absolute left-[-210px] top-[80px] transition-opacity ease-in-out duration-300 bg-[#212121] z-20 ${isTrue?"opacity-0":"opacity-100"}`}>
                    <img src="avatarImg.png" className="w-[260px] h-auto object-cover" />
                </div>



            </div>
            
        
        </div>
    
        </>
    )
}
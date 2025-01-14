import {createPortal } from "react-dom"
import { IoMdClose } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";
import { Button } from "./buttons";
import { IoMdCall } from "react-icons/io";
import buttonInfo from "./buttonInfo.json"
import { FaRegFileAlt } from "react-icons/fa";

const size=25;

const iconColor={
    fill:"#f56539"
}
const icons={
    IoHomeSharp: <IoHomeSharp  size={size} /> ,
    FaUser:<FaUser size={size} />,
    FaRegFolderOpen:<FaRegFolderOpen size={size} />,
    IoMdCall: <IoMdCall size={size} />,
    FaRegFileAlt:<FaRegFileAlt size={size} />
}



export  function SideBar({isTrue,setIsTrue,handleRef,homeRef,contactRef,aboutRef,projectRef,eduRef}){
    const refs = { homeRef, contactRef, aboutRef,projectRef,eduRef };
  
    
    return (
        createPortal(
            <>
            <div  onClick={()=>setIsTrue(false)} className={`z-50 fixed top-0 bottom-0 right-0  left-0 bg-transparent backdrop-blur-md transition-all duration-500 ${isTrue?"opacity-100 visible":"opacity-0 invisible "}`}>

                <div 
                onClick={(e)=>e.stopPropagation()} 
                className={`bg-[#212121] -translate-x-full 
                fixed top-0 left-0 w-80 h-[100vh] sm:rounded-r-[40px]
                 flex justify-center items-center transition-transform ease-in-out duration-500  ${isTrue?"translate-x-0": "-translate-x-full"}`}>

            <div className=" w-[250px] h-[540px]  ">
                <span onClick={()=>setIsTrue(false)} className="text-[#f56539] hover:text-gray-300 absolute right-9 cursor-pointer">
                    <IoMdClose size={45} />
                </span>

            <div className="mt-[80px] w-full h-full flex items-center gap-6  flex-col ">
        {
            buttonInfo.map((button,index)=>{
                const ref=refs[button.refKey];
                     return  <Button key={index} handleRef={()=>handleRef(ref)} setIsTrue={setIsTrue}  Icon={icons[button.icon]} isTrue={isTrue} size={26} title={button.title} />
            })
        }
          
            </div>
                    
        

            </div>
            


                </div>


</div>
            </>,
            document.getElementById("portal")
        )
    )
}

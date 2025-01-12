
import { InfoCard } from "./InfoCard";
import info from "./info.json"

import { FaGraduationCap } from "react-icons/fa6";
const icons={
    FaGraduationCap:<FaGraduationCap size={45} style={{fill:"#fff"}} />,
}
export function EducationSec(){

    return (
        <>
     <div className="w-[90%] mx-auto   mt-12 flex ">
     <div className="w-[70%] h-full" >
     <p className="text-[#f56539] text-6xl font-poppins font-bold">Education</p>

     <div className="flex flex-col gap-6 mt-10">

{
    info.map((info,index)=><InfoCard key={index} info={info} icon={icons[info.icon]} />)
}

     

     </div>
     </div>

     <div className="w-[30%] h-[600px] flex justify-center items-center">

     <img src="./orangeDesk.svg" className="bg-transparent w-full  h-auto " />
     </div>
          
       </div>

        </>
    )
}
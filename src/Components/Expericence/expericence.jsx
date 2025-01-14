import { MdOutlineBusinessCenter } from "react-icons/md";
import expInfo from "./experience.json"
import { ExpInfoCard } from "./expInfoCard";


const icons={
    MdOutlineBusinessCenter:<MdOutlineBusinessCenter size={45} style={{fill:"#fff"}} />,
}
export function Experience(){

    return (
        <>
     <div className="w-[90%] mx-auto   mt-12 flex flex-row-reverse  ">
     <div className="w-full lg:w-[70%] h-full" >
     <p className="text-[#f56539] text-5xl sm:text-6xl font-poppins font-bold text-center  md:text-end">Experience</p>

     <div className="flex flex-col   items-end gap-6 mt-10 ">

{
    expInfo.map((info,index)=><ExpInfoCard key={index} info={info} icon={icons[info.icon]} />)
}
     

     </div>
     </div>

     <div className="w-[30%] hidden      h-[600px] lg:flex lg:justify-center lg:items-center">

     <img src="./expImg.svg" className="bg-transparent w-full  h-auto " />
     </div>
          
       </div>

        </>
    )
}
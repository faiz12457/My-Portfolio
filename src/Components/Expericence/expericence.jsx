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
     <div className="w-[70%] h-full  flex flex-col items-end" >
     <p className="text-[#f56539] text-6xl font-poppins font-bold">Experience</p>

     <div className="flex flex-col gap-6 mt-10">

{
    expInfo.map((info,index)=><ExpInfoCard key={index} info={info} icon={icons[info.icon]} />)
}
     

     </div>
     </div>

     <div className="w-[30%] h-[600px] flex justify-center items-center">

     <img src="./expImg.svg" className="bg-transparent w-full  h-auto " />
     </div>
          
       </div>

        </>
    )
}
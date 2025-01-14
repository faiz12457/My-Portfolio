import { useInView } from "react-intersection-observer";



import style from "./edu.module.css"


export function InfoCard({info,icon}){
   const {degree,institute,year}=info;

   const [ref,isView]=useInView({
    triggerOnce:true
   });
   
   
return (
    <>
    <div ref={ref} className={` w-full lg:w-[600px] h-[140px] gap-3 cursor-pointer hover:bg-[rgb(245,101,57,0.73)] bg-[rgba(245,101,57,0.5)]  rounded-3xl flex ${isView? style.visible: style.invisible}  `} >
    <div className="w-[20%] h-full flex pl-2  justify-center items-center ">
        <div className=" rounded-[50%]   text-xl  bg-[#f56539] w-14 h-14 opacity-100 md:w-16 md:h-16 flex justify-center items-center">
       {icon}
        </div>
    </div>

    <div className="w-[85%] h-full  flex flex-col justify-center">
            <p className="text-[#f56539] font-semibold font-poppins text-xs md:text-[.9rem]">{year}</p>
            <p className="text-[#eaeaea] font-poppins font-medium md:font-semibold text-xl md:text-2xl">{degree}</p>
            <p className="text-[#eaeaea] opacity-80 font-poppins font-medium md:font-semibold text-[17px] md:text-[1.3rem]">{institute}</p>
    </div>

    </div>
    </>
)
}





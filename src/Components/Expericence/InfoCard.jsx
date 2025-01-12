import { useInView } from "react-intersection-observer";






export function ExpInfoCard({info,icon}){
   const {role,organization,year}=info;
   const [ref,isView]=useInView({
    triggerOnce:true
   });
   
return (
    <>
    <div ref={ref} className={`w-[680px] h-[140px]  rounded-3xl transition-transform duration-500 ease-in-out translate-y-full  flex ${isView?"translate-y-0": "translate-y-full"}`} style={{ background: 'rgba(245, 101, 57, 0.5)' }}>
    <div className="w-[15%] h-full flex  justify-center items-center ">
        <div className=" rounded-[50%]  bg-[#f56539] opacity-100 w-16 h-16 flex justify-center items-center">
       {icon}
        </div>
    </div>

    <div className="w-[85%] h-full  flex flex-col justify-center">
            <p className="text-[#f56539] font-semibold font-poppins text-[.9rem]">{year}</p>
            <p className="text-[#eaeaea] font-poppins font-semibold text-2xl">{role}</p>
            <p className="text-[#eaeaea] opacity-80 font-poppins font-semibold text-[1.3rem]">{organization}</p>
    </div>

    </div>
    </>
)
}





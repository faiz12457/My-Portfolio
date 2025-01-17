
import { SkillCard } from "./skillCard";
import Marquee from "react-fast-marquee";
import info from "./skillinfo.json"

export function Skill() {
    return (
        <div className="w-full h-96 sm:h-[510px] pt-4 flex flex-col gap-2  sm:gap-8 mt-12">
            <p className="text-[#f56539] text-4xl sm:text-5xl md:text-6xl text-center font-poppins font-bold">Skills</p>
           

           <div className="h-[350px] w-[95%] mx-auto  flex justify-center items-center ">
              <Marquee speed={100} pauseOnHover={true} className="h-full">
                <div className="flex gap-10 ml-10">
                {
                    info.map((info,index)=> <SkillCard key={index} title={info.title} img={info.img} />)
                }
                    
                </div>
              </Marquee>
           

           </div>
            </div>
        
    );
}

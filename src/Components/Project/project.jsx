
import { ProjectCard } from "./projectCard";
import { FaArrowRight } from "react-icons/fa6";

import info from "./cardInfo.json"
import ButtonWithIcon from "./ButtonWithIcon";
import { NavLink } from "react-router";


export function Project(){

    

    return (
        <>
            <div className={`w-[90%] mx-auto    flex flex-col  gap-11 box-border pt-2 mt-9 `}>
                <p className="text-[#f56539] font-poppins font-bold text-[40px] sm:text-6xl sm:font-semibold text-center">Projects</p>


                <div  className={`w-[90%] mx-auto flex  flex-wrap gap-12 sm:gap-7 box-border justify-center `}>
                  {
                    info.map((info,index)=><ProjectCard key={index} link={info.link} img={info.img} title={info.title} beforeContent={info.beforeContent} afterContent={info.afterContent} />)
                  }

                </div>
                <div className="w-full flex justify-center sm:justify-end">
                <NavLink to="/allprojects"><ButtonWithIcon title="View All" icon={<FaArrowRight />} /></NavLink>
                </div>
                
            </div>
        </>
    )
}
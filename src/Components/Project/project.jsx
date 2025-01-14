import style from "../Education/edu.module.css";
import { ProjectCard } from "./projectCard";

import info from "./cardInfo.json"


export function Project(){

    

    return (
        <>
            <div className={`w-[90%] mx-auto   flex flex-col  gap-11 box-border pt-2 mt-9 `}>
                <p className="text-[#f56539] font-poppins font-bold text-[40px] sm:text-6xl sm:font-semibold text-center">Projects</p>


                <div  className={`w-[90%] mx-auto flex  flex-wrap gap-12 sm:gap-7 box-border justify-center `}>
                  {
                    info.map((info,index)=><ProjectCard key={index} img={info.img} title={info.title} beforeContent={info.beforeContent} afterContent={info.afterContent} />)
                  }

                </div>
            </div>
        </>
    )
}
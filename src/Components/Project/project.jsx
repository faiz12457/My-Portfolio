import style from "../Education/edu.module.css";
import { ProjectCard } from "./projectCard";

import info from "./cardInfo.json"


export function Project(){

    

    return (
        <>
            <div className={`w-[90%] mx-auto   flex flex-col gap-11 box-border pt-2 mt-9 `}>
                <p className="text-[#f56539] font-poppins text-6xl font-semibold text-center">Projects</p>


                <div  className={`w-[90%]
                 mx-auto flex  flex-wrap gap-7
                  box-border justify-center  
                 

                  `}>

                  {
                    info.map((info)=><ProjectCard img={info.img}  title={info.title} beforeContent={info.beforeContent} afterContent={info.afterContent} />)
                  }

          
          
         

                </div>
            </div>
        </>
    )
}
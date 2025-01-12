import { ProjectCard } from "./projectCard";


export function Project(){

    return (
        <>
            <div className="w-[90%] mx-auto   flex flex-col gap-11 box-border pt-2 mt-9">
                <p className="text-[#f56539] font-poppins text-6xl font-semibold text-center">Projects</p>


                <div className="w-[90%] mx-auto flex flex-wrap gap-7 box-border justify-center ">

          <ProjectCard img="./weatherImg.svg"  title="" beforeContent="" afterContent="" />
          <ProjectCard img="./weatherImg.svg"  title="" />
          <ProjectCard img="./weatherImg.svg"  title="" />
          <ProjectCard img="./weatherImg.svg"  title="" />
          <ProjectCard img="./weatherImg.svg"  title="" />

                </div>
            </div>
        </>
    )
}
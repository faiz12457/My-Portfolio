
import { useInView } from "react-intersection-observer";




export function About(){

    const [aboutRef,isView]=useInView({
    
    })
    return (
        <>
            <div className="pt-12 w-full box-border ">

                <div  className="w-[95%] mx-auto  h-10 flex justify-center gap-5 items-center">
                 <span className="bg-[#f56539] rounded-[50%] inline-block w-3 h-3"></span>
                 <span className="bg-[#f56539] rounded-[50%] inline-block w-3 h-3"></span>
                
                 <div className="border-[#f56539] bg-[#f56539] rounded-lg w-[90%] h-[5px]"></div>
                </div>

             
                {/* Main Content */}

                <div className="flex w-[90%] flex-col-reverse md:flex-row h-full mx-auto box-border  mt-7">
                       <div ref={aboutRef} 
                       className={` font-poppins md:h-[408px] sm:w-full  sm:pt-4 gap-5 md:gap-0  md:w-[45%]  box-border  
                        flex flex-col md:justify-between opacity-0 transition-all  -translate-x-full ease-in-out
                       ${isView?"opacity-100 translate-x-0": "opacity-0 -translate-x-full"}
                        `}  style={{transitionDuration:"1500ms" }}>
                         <p className="text-[#f56539] text-5xl text-center md:text-start md:text-5xl lg:text-6xl font-bold">Who I Am</p>
                         <p className="text-[#eaeaea] opacity-70 text-[1rem] sm:text-xl md:text-[1.1rem] lg:text-xl">I'm Faiz – a creative mind navigating the web design and development realm from Lahore, Pakistan.</p>
                         <p className="text-[#eaeaea] opacity-70 text-[1rem] sm:text-xl md:text-[1.1rem] lg:text-xl"> I am Front-end developer passionate about creating engaging user interfaces. Always eager to learn, I’m dedicated to improving my skills in computer science and exploring new technologies to stay ahead in the field.</p>
                       </div>



                       <div className=" mb-4 md:mb-0  bg-transparent w-full h-[330px] items-start justify-center md:w-[65%] md:h-[408px] flex md:items-center md:justify-end  ">
                       <img src="./themeGirl.svg" className="bg-transparent w-[300px] h-full  md:h-auto md:mr-20 " />

                  </div>
                


                

             </div>

            </div>
        </>
    )
}
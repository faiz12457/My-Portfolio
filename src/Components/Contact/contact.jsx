import { IconWithText } from "./iconWithText";
import { InputField } from "./inputField";
import { BsSend } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { TiLocation } from "react-icons/ti";
import { HoverableIcon } from "./hoverAbleIcon"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { LuCopyright } from "react-icons/lu";
export function Contact(){

    const date= new Date();
    

    return (
        <>
            <div className="w-[90%] mx-auto sm:h-[580px] mt-[100px]  box-border  flex flex-col gap-6 sm:gap-16">
                <p className="text-[#f56539] text-center text-5xl  lg:text-start  font-poppins font-bold">Contacts</p>

                <div className="w-full h-full  flex flex-col sm:flex-row box-border  gap-3">
        
              <div className="w-full lg:w-1/3 md:w-1/2  sm:h-full" >
              <form className="w-full h-full  pt-6  flex justify-center items-center sm:items-start gap-4 flex-col sm:justify-between">
                    <InputField type={'text'} label={"Name"} placeholder={"John Doe"} />
                    <InputField type={'email'} label={"Email"} placeholder={"John@doe.com"} />
                    <InputField type={'textarea'} label={"Message"} placeholder={"Type your message...."} isTextarea={true} />
               <div className="w-full flex justify-end sm:justify-start sm:w-max">
                    <button className="  hover:bg-[#eaeaea] hover:scale-110 transition-transform duration-700 ease-in-out  font-poppins font-semibold text-[#212121] w-[140px] 
                     rounded-[50px]  p-3 bg-[#f56539] flex justify-center items-center gap-3">Send <BsSend size={20}/></button>
            </div>


                     </form>
              </div>




              <div className="sm:w-1/2 w-full sm:h-full pt-6 box-border    flex flex-col ">
                     
                     <div className=" grow box-border  justify-center items-center sm:justify-start sm:items-start w-full flex   sm:pl-6 md:pl-8">
                     <div className="gap-9  flex flex-col">
                     <IconWithText text={"faizRizvi45@gmail.com"} icon={'@'}  />
                     <IconWithText text={"+923314437110"} icon={<IoMdCall />}  />
                     <IconWithText text={"Lahore,Pakistan"} icon={<TiLocation />}  />
                     </div>
                     
                     </div>
                 
                 <div className="flex justify-center items-center  w-full gap-5 sm:mb-10  pt-8 sm:pt-0" >
                    <HoverableIcon icon={<FaLinkedinIn />} />
                    <HoverableIcon icon={<FaGithub />} />
                    <HoverableIcon icon={<FaFacebook />} />
                 </div>
              </div>


              <div className=" hidden w-1/3 h-full  lg:flex justify-end">
                 <img src="./contactImg.svg" className="w-[250px] h-auto" />
              </div>



                </div>
                    <div className=" w-full text-2xl font-semibold flex justify-center items-center font-poppins text-[#eaeaea] ">

                    <span><LuCopyright /></span> <p className="text-[#eaeaea] text-2xl text-center">{date.getFullYear()},Faiz Rizvi</p>
                    </div>
     
            </div>
        </>
    )
}
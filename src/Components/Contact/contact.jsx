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
import {useFormik} from "formik"
import { portfolioSchema } from "./yupSchema";
import { useState } from "react";




export function Contact(){
    
const [send,setSend]=useState(false)
    const date= new Date();

    const onSubmit=(values,actions)=>{
        setSend(true)

        setTimeout(()=>{
           setSend(false)
        },3000)
        
        actions.resetForm(); 
    }
    
    const formik =useFormik({
        initialValues:{
            name:"",
            email:"",
            message:"",
        },

        onSubmit,
    validationSchema:portfolioSchema,
    
})


    const {values,errors,handleChange,handleBlur,handleSubmit,touched}=formik
    const {name,email,message}=values;

  console.log(touched)

    
    
    

    return (
        <>
            <div className="w-[90%] mx-auto sm:h-[580px] mt-[100px]  box-border  flex flex-col gap-6 sm:gap-16">
                <p className="text-[#f56539] text-center text-5xl  lg:text-start  font-poppins font-bold">Contacts</p>

                <div className="w-full h-full  flex flex-col sm:flex-row box-border  gap-3">
        
              <div className="w-full lg:w-1/3 md:w-1/2  sm:h-full" >
              <form onSubmit={handleSubmit}  className="w-full h-full  pt-6  flex justify-center items-center sm:items-start gap-8 sm:gap-7 flex-col sm:justify-between">
                    <InputField type={'text'} errors={errors.name} touched={touched.name} values={name} name="name" onBlur={handleBlur} onChange={handleChange} label={"Name"} placeholder={"John Doe"} />
                    <InputField type={'email'} errors={errors.email} touched={touched.email} values={email} name="email" onBlur={handleBlur} onChange={handleChange} label={"Email"} placeholder={"John@doe.com"} />
                    <InputField type={'textarea'} errors={errors.message} touched={touched.message} values={message} name="message" onBlur={handleBlur} onChange={handleChange} label={"Message"} placeholder={"Type your message...."} isTextarea={true} />
               <div className="w-full flex justify-end sm:justify-start sm:w-max">
                    <button type="submit" className="  hover:bg-[#eaeaea] hover:scale-110 transition-transform duration-700 ease-in-out  font-poppins font-semibold text-[#212121] w-[140px] 
                     rounded-[50px]  p-3 bg-[#f56539] flex justify-center items-center gap-3">{send?"Msg Sent":"Send"}{send?null:<BsSend size={20}/>}</button>
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
                    <HoverableIcon icon={<FaLinkedinIn />} isTrueLink={true} link="https://www.linkedin.com/in/faiz-rizvi-bb1142294/" />
                    <HoverableIcon icon={<FaGithub />} isTrueLink={true} link="https://github.com/faiz12457" />
                    <HoverableIcon icon={<FaFacebook />} isTrueLink={true}  link="https://github.com/faiz12457" />
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
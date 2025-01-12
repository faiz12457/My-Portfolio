import { IoHomeSharp } from "react-icons/io5";
export function Button({title,Icon,isTrue,handleRef,setIsTrue}){
    return (
        <>
             <div onClick={()=>{
             handleRef();
             setIsTrue(false);
             }} className={`text-[#f56539]
              hover:text-black cursor-pointer
               hover:bg-[#f56539] gap-4 w-52 h-16
        
                rounded-[78px] border-[#f56539] border-2 flex
                 justify-center items-center
                  transition-transform 
                  -translate-x-full
                   ease-in-out ${isTrue ? "translate-x-0" : ""} font-poppins `}
                   style={{ transitionDuration: "1500ms" }}
                   
                   >
                       <span>
                       {Icon}
                       </span>
                       <p className="font-bold text-[1.3rem] inline-block w-[60px]">{title}</p>
                    </div>
        </>
    )
}
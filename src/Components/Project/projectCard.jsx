
import { HoverableIcon } from "../Contact/hoverAbleIcon"
 import styles from "../Education/edu.module.css";
import style from "./projectCard.module.css"
import { TbPlayerPlayFilled } from "react-icons/tb";
import { useInView } from "react-intersection-observer";

export function ProjectCard({beforeContent="",afterContent="",title="",img=""}){
const [ref,isView]=useInView({
    triggerOnce:true
});

 
    return (
        <>
        
       <div ref={ref} data-content-before={beforeContent} data-content-after={afterContent}
        className={`w-[304px] h-[360px] font-poppins
        overflow-hidden relative cursor-pointer rounded-xl bg-[#ff764d] ${style.cardContainer} ${isView?styles.visible: styles.invisible}  `}>
       <div className="w-[90%] mx-auto  h-full pt-4">
       <p className="text-[#eaeaea] font-bold text-2xl font-poppins text-center h-6">{title}</p>
        <div className={`w-full h-[240px]  flex justify-center items-center  `}>
            <img src={img} className={`h-auto object-cover w-[220px] ${style.img}`} />
        </div>
<div className="w-full flex justify-between h-[80px] items-center">
        <HoverableIcon icon={<TbPlayerPlayFilled />} className="hover:text-[#212121]" iconColor="text-[#eaeaea]" bgColor="bg-[#212121]" />
      <HoverableIcon icon={"</>"} hoverBgColor="hover:bg-[#212121]" className={`${style.secIcon} border-[#eaeaea] hover:border-transparent  hover:text-[#f56539] rounded-[50%] border-2 text-[1.2rem] text-[#eaeaea] font-bold`} />
</div>

</div>




       </div>


        </>
    )
}
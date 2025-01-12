export function SkillCard({title="", img=""}){
    return (<>
    <div className="w-40 h-40 hover:scale-110 
    transition-transform duration-500 ease-in-out 
    bg-[#212121] rounded-xl 
     text-[#eaeaea] font-bigShoulders text-2xl flex flex-col gap-3 justify-center items-center
   shadow-[0px_0px_30px_0px_rgba(245,101,57,0.3)]

     ">
        
     <img src={img}   className="w-10" />
        <p>{title}</p>
        </div>
    </>)
}
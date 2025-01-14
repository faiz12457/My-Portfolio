import React from 'react'

function ButtonWithIcon({bgColor="bg-[#f56539]",className="",title="",icon}) {
  return (
    <button className={`w-[150px] cursor-pointer h-12  relative
     text-[#eaeaea]  font-medium flex pl-7
       items-center   rounded-3xl ${bgColor} ${className}` }  >
       <span className='text-[1rem]
        hover:text-[#212121] font-poppins '>{title}</span>
     <span className=' w-10 h-10 rounded-full bg-[rgba(33,33,33,0.5)]
      hover:bg-[#212121] fill-[#eaeaea] inline-flex justify-center
       items-center text-xl absolute right-2 ' >{icon}</span>
    </button>
  )
}

export default ButtonWithIcon





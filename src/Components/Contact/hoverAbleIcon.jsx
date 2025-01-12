export function HoverableIcon({ 
    icon, 
    bgColor = "bg-[#f56539]", 
    iconColor = "text-[#212121]", 
    hoverBgColor = "hover:bg-[#eaeaea]", 
    className = "" 
  }) {
    return (
      <span
        className={`hover:scale-125 active:scale-95 transition-transform duration-700 ease-out cursor-pointer inline-flex w-11 h-11 justify-center items-center font-semibold text-2xl rounded-[50%] ${bgColor} ${iconColor} ${hoverBgColor} ${className}`}
      >
        {icon}
      </span>
    );
  }
  
import { HoverableIcon } from "./hoverAbleIcon";

export function IconWithText({ 
    icon, 
    text, 
    bgColor = "bg-[#f56539]", 
    textColor = "text-[#eaeaea]", 
    iconColor = "text-[#212121]" 
  }) {
    return (
      <div className="flex items-center gap-3  sm:gap-3 md:gap-5">
        <HoverableIcon icon={icon} iconColor={iconColor} bgColor={bgColor} />
        <p className={`font-poppins sm:text-[1.1rem] ${textColor}`}>
          {text}
        </p>
      </div>
    );
  }
  
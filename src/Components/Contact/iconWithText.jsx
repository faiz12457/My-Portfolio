import { HoverableIcon } from "./hoverAbleIcon";

export function IconWithText({ 
    icon, 
    text, 
    bgColor = "bg-[#f56539]", 
    textColor = "text-[#eaeaea]", 
    iconColor = "text-[#212121]" 
  }) {
    return (
      <div className="flex items-center gap-5">
        <HoverableIcon icon={icon} iconColor={iconColor} bgColor={bgColor} />
        <p className={`font-poppins text-[1.2rem] ${textColor}`}>
          {text}
        </p>
      </div>
    );
  }
  
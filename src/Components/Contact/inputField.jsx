import { useRef, useState } from "react";

export function InputField({ type, 
  label, placeholder,
   isTextarea = false,
    rows = 4,
    onChange,
    onBlur,
    name="",
    values="",
    touched=false,
    errors=""

   })
   
   
   {

    return (
      <div className="relative  w-full sm:w-max ">
        <label
          className="text-[#f56539] font-poppins p-1 font-semibold absolute 
          z-10 bg-[#212121] left-5 top-[-13px]"
        >
          {label}
        </label>
        {isTextarea ? (
          <textarea
          name={name}
            placeholder={placeholder}
            value={values}
            rows={rows}
            className="p-4 inline-block font-poppins outline-none text-white w-full sm:w-72 md:w-80
            border-[#f56539] rounded-[1.2rem] border-4 bg-transparent text-[.9rem] "
            onChange={onChange}
            onBlur={onBlur}
          ></textarea>
        ) : (
          <input
            type={type}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            value={values}
            className="h-[50px] p-4 inline-block font-poppins outline-none text-white w-full sm:w-72 md:w-80
            border-[#f56539] rounded-[1.2rem] border-4 bg-transparent text-[.9rem]"
          />
          
        )}
        <p className="text-[#eaeaea] left-3 -bottom-5 absolute text-[.7rem] font-poppins font-normal">{errors && touched? errors:null}</p>
      </div>
    );
  }
  